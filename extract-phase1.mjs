import puppeteer from 'puppeteer-core';
import { writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('docs/design-references', { recursive: true });
mkdirSync('docs/research/components', { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--no-sandbox','--disable-dev-shm-usage','--disable-gpu'],
});

async function snapshot(width, height, label) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  const resp = await page.goto('https://cisoonline.com.au/', { waitUntil: 'networkidle2', timeout: 45000 });
  console.log(`[${label}] HTTP ${resp.status()}`);
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: `docs/design-references/ciso-${label}-full.png`, fullPage: true });
  const data = await page.evaluate(() => {
    const pick = (el) => {
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        text: el.textContent?.trim().slice(0, 120) || null,
        cls: (el.className?.toString() || '').split(' ').slice(0,3).join(' '),
        font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight,
        color: cs.color, bg: cs.backgroundColor, padding: cs.padding, margin: cs.margin,
        radius: cs.borderRadius, shadow: cs.boxShadow, display: cs.display,
      };
    };
    const body = document.body;
    const sections = [...document.querySelectorAll('section,header,footer,main > div, .elementor-section, [class*="section"]')];
    return {
      title: document.title,
      metaDesc: document.querySelector('meta[name=description]')?.content || null,
      htmlBg: getComputedStyle(document.documentElement).backgroundColor,
      bodyFontFamily: getComputedStyle(body).fontFamily,
      bodyColor: getComputedStyle(body).color,
      bodySize: getComputedStyle(body).fontSize,
      h1Count: document.querySelectorAll('h1').length,
      sectionCount: sections.length,
      sectionSamples: sections.slice(0, 20).map(pick),
      links: [...document.querySelectorAll('a')].slice(0,30).map(a => ({ text: a.textContent?.trim().slice(0,40), href: a.href })),
      images: [...document.querySelectorAll('img')].slice(0,30).map(i => ({ src: i.src, alt: i.alt?.slice(0,80), w: i.naturalWidth, h: i.naturalHeight })),
      bgImages: [...new Set([...document.querySelectorAll('*')].map(el => getComputedStyle(el).backgroundImage).filter(b => b && b !== 'none'))].slice(0,10),
      fontFamilies: [...new Set([...document.querySelectorAll('h1,h2,h3,p,a,button,body')].map(el => getComputedStyle(el).fontFamily))],
      headings: [...document.querySelectorAll('h1,h2,h3')].slice(0,30).map(h => ({ tag: h.tagName, text: h.textContent?.trim().slice(0,120) })),
      paragraphs: [...document.querySelectorAll('p')].slice(0,20).map(p => p.textContent?.trim().slice(0,200)).filter(t => t && t.length > 20),
    };
  });
  await page.close();
  return data;
}

const desktop = await snapshot(1440, 900, 'desktop');
const mobile = await snapshot(390, 844, 'mobile');

writeFileSync('docs/research/SITE_RECON.md', `# CISO Online — Site Reconnaissance

## Meta
- Title: ${desktop.title}
- Description: ${desktop.metaDesc || '(none)'}

## Global Tokens
- HTML background: ${desktop.htmlBg}
- Body font-family: ${desktop.bodyFontFamily}
- Body color: ${desktop.bodyColor}
- Body size: ${desktop.bodySize}

## Font Families In Use
${desktop.fontFamilies.map(f => `- ${f}`).join('\n')}

## Page Topology
- H1 count: ${desktop.h1Count}
- Section-like elements detected: ${desktop.sectionCount}
- First 20 section samples:
${desktop.sectionSamples.map(s => `  - <${s.tag} class="${s.cls}"> font=${s.font} size=${s.size} color=${s.color} bg=${s.bg}`).join('\n')}

## Headings (top 30)
${desktop.headings.map(h => `- <${h.tag}> ${h.text}`).join('\n')}

## Sample Paragraphs (top 20)
${desktop.paragraphs.map(p => `> ${p}`).join('\n\n')}

## Images (first 30)
${desktop.images.map(i => `- ![${i.alt || 'no-alt'}] ${i.src} (${i.w}x${i.h})`).join('\n')}

## Background Images (unique, top 10)
${desktop.bgImages.map(b => `- ${b.slice(0,200)}`).join('\n')}

## Sample Links (first 30)
${desktop.links.map(l => `- ${l.text || '[no text]'} -> ${l.href}`).join('\n')}
`);

writeFileSync('docs/research/DESKTOP_RECON.json', JSON.stringify(desktop, null, 2));
writeFileSync('docs/research/MOBILE_RECON.json', JSON.stringify(mobile, null, 2));
console.log('SAVED: docs/research/SITE_RECON.md and JSON variants');

await browser.close();
