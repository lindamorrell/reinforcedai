import { parse } from 'node-html-parser';
import { readFileSync, writeFileSync } from 'node:fs';

const html = readFileSync('ciso-curl.html', 'utf8');
const dom = parse(html);

const styleLinks = [...dom.querySelectorAll('link[rel="stylesheet"]')].map(l => l.getAttribute('href'));
const preconnect = [...dom.querySelectorAll('link[rel="preconnect"]')].map(l => l.getAttribute('href'));
const title = dom.querySelector('title')?.text || '';
const metaDesc = dom.querySelector('meta[name="description"]')?.getAttribute('content') || '';
const metaOG = [...dom.querySelectorAll('meta[property^="og:"]')].map(m => ({ p: m.getAttribute('property'), c: m.getAttribute('content') }));

const inlineStyles = [...dom.querySelectorAll('style')].map(s => s.text);

const sections = [...dom.querySelectorAll('section, header, footer, .elementor-section, .elementor-top-section, [class*="section"], [class*="container"]')]
  .filter(e => e.querySelectorAll('*').length > 2)
  .slice(0, 30);

const headings = [...dom.querySelectorAll('h1, h2, h3, h4')].map(h => ({
  tag: h.tagName, text: h.text.replace(/\s+/g, ' ').trim().slice(0, 200)
}));

const paragraphs = [...new Set([...dom.querySelectorAll('p')].map(p => p.text.replace(/\s+/g, ' ').trim()).filter(t => t && t.length > 20))].slice(0, 40);

const links = [...dom.querySelectorAll('a')].map(a => ({
  text: a.text.replace(/\s+/g, ' ').trim().slice(0, 80),
  href: a.getAttribute('href')
})).filter(l => l.text && l.href).slice(0, 50);

const images = [...dom.querySelectorAll('img')].slice(0, 50).map(i => ({
  src: i.getAttribute('src') || i.getAttribute('data-src') || i.getAttribute('data-lazy-src'),
  alt: i.getAttribute('alt')?.slice(0, 100) || '',
  cls: i.getAttribute('class')?.slice(0, 80) || '',
}));

const scripts = [...dom.querySelectorAll('script[src]')].map(s => s.getAttribute('src')).filter(Boolean);
const fontLinks = styleLinks.filter(s => s && /font|google/i.test(s));

const out = {
  title, metaDesc, metaOG,
  styleLinks: styleLinks.slice(0, 30),
  preconnect,
  fontLinks,
  scripts: scripts.slice(0, 20),
  inlineStyleBytes: inlineStyles.reduce((a, s) => a + s.length, 0),
  sectionCount: sections.length,
  headings,
  paragraphs,
  links,
  images,
};

writeFileSync('docs/research/CISO_RAW_EXTRACTION.json', JSON.stringify(out, null, 2));

let md = `# CISO Online — Deep Extraction
Source: cisoonline.com.au
Method: curl+Chrome-UA + node-html-parser offline analysis

## Meta
- Title: ${out.title}
- Description: ${out.metaDesc}
${out.metaOG.map(m => `- OG ${m.p}: ${m.c}`).join('\n')}

## Stylesheets (${out.styleLinks.length})
${out.styleLinks.map(s => `- ${s}`).join('\n')}
${out.fontLinks.length ? `\n### Google Fonts\n${out.fontLinks.map(f => `- ${f}`).join('\n')}` : ''}

## Page Topology — Sections (${sections.length})
${sections.slice(0, 20).map((s, i) => `### Section ${i + 1}
- tag: ${s.tagName}
- class: ${(s.getAttribute('class') || '').slice(0, 120)}
- id: ${s.getAttribute('id') || ''}
- depth: ${s.querySelectorAll('*').length} descendants
- innerText preview: ${s.text.replace(/\s+/g, ' ').trim().slice(0, 200)}
`).join('\n')}

## Headings (${headings.length})
${headings.map(h => `- <${h.tag}> ${h.text}`).join('\n')}

## Paragraphs (${paragraphs.length}, deduped)
${paragraphs.map(p => `> ${p}`).join('\n\n')}

## Links (${links.length} shown)
${links.map(l => `- [${l.text}] (${l.href})`).join('\n')}

## Images (${out.images.length} shown)
${out.images.map(i => `- ![${i.alt || 'no-alt'}] src=${(i.src || '').slice(0, 100)}`).join('\n')}
`;

writeFileSync('docs/research/CISO_EXTRACTION.md', md);
console.log(`DONE — wrote ${md.length} bytes markdown + ${JSON.stringify(out).length} bytes json`);
console.log(`headings: ${headings.length}, sections: ${sections.length}, paragraphs: ${paragraphs.length}, images: ${out.images.length}`);
