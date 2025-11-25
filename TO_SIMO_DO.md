# TO SIMO DO - Pre-Launch Manual Tasks 🚀

Questo file contiene le azioni manuali CRITICHE che devi compiere prima del lancio del sito e per mantenerlo ottimizzato.

---

## 🎯 PRIORITÀ ASSOLUTA (Fai PRIMA del lancio)

### 1. Google Analytics 4 Setup
**Tempo**: 10 minuti  
**Azione**:
1. Vai su https://analytics.google.com
2. Crea un nuovo account/proprietà per "Mountain & Fauna Lover"
3. Ottieni il **Measurement ID** (formato: `G-XXXXXXXXXX`)
4. Crea il file `.env.local` nella root del progetto:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. **IMPORTANTE**: Aggiungi `.env.local` al `.gitignore` (già fatto)

### 2. Compressione Immagini
**Tempo**: 15-20 minuti  
**Azione**:
1. Vai su https://squoosh.app/
2. Carica e comprimi **TUTTE** le immagini in `public/images/`:
   - `/home/background.jpg` → Target: < 200KB
   - `/branding/logo.jpg` → Target: < 50KB
   - `/blog/*` → Target: < 150KB ciascuna
   - `/partners/*` → Target: < 100KB ciascuna
3. **Settings consigliate in Squoosh**:
   - Format: WebP (migliore compressione)
   - Quality: 80-85% (ottimo compromesso qualità/dimensione)
4. Sovrascrivi i file originali con quelli compressi

### 3. Favicon Multi-Device
**Tempo**: 5 minuti  
**Azione**:
1. Vai su https://realfavicongenerator.net/
2. Carica il tuo logo (`/public/images/branding/logo.jpg`)
3. Scarica il pacchetto completo
4. Estrai tutti i file nella cartella `/public/` (sovrascrive `favicon.ico` esistente)
5. Verifica che includa:
   - `favicon.ico` (browser classici)
   - `apple-touch-icon.png` (iOS home screen)
   - `favicon-16x16.png`, `favicon-32x32.png`
   - `android-chrome-192x192.png`, `android-chrome-512x512.png`

### 4. Google Search Console Verification
**Tempo**: 10 minuti  
**Azione**:
1. Vai su https://search.google.com/search-console
2. Aggiungi proprietà: `https://mountainfaunalover.com`
3. **Metodo di verifica consigliato**: HTML file
   - Scarica il file di verifica (es. `google...html`)
   - Metti il file in `/public/`
   - Verifica
4. **Dopo la verifica**:
   - Invia sitemap: `https://mountainfaunalover.com/sitemap.xml`
   - Monitora "Performance" tab per keyword rankings

### 5. Bing Webmaster Tools
**Tempo**: 5 minuti  
**Azione**:
1. Vai su https://www.bing.com/webmasters
2. Importa sito da Google Search Console (più veloce) OPPURE aggiungi manualmente
3. Invia sitemap: `https://mountainfaunalover.com/sitemap.xml`

---

## 📝 CONTENUTI (Alta Priorità)

### 6. Espandi Blog Posts
**Tempo**: 2-3 ore per post  
**Problema**: I post attuali hanno contenuto placeholder.  
**Azione**:
1. Apri `src/data/posts.js`
2. Per ogni post, espandi il campo `content` con:
   - **Introduzione** (100-150 parole): Cattura l'attenzione, presenta il problema
   - **Corpo principale** (600-800 parole): Consigli pratici, esperienza personale, dettagli tecnici
   - **Conclusione** (50-100 parole): Riassunto + CTA ("Seguimi su Instagram per più avventure!")
3. **Target totale**: 800-1200 parole per post (ottimale per SEO)

**Esempio struttura**:
```
"content": "
[INTRO] Avvistare cervi durante il bramito è un'esperienza che ti cambia la vita. 
In Val di Rabbi, ogni autunno...

[CORPO] Per massimizzare le probabilità di avvistamento, segui questi step:
1. Orario: Alba (5:30-7:00) o tramonto (18:00-20:00)
2. Attrezzatura: Binocolo 10x42 minimo...
3. Posizione: Valle del Rabbiès, sentiero CAI 105...

[CONCLUSIONE] Seguendo questi consigli, le tue chance di assistere al bramito 
aumentano del 300%. Vuoi più consigli? Seguimi su Instagram @mountainfaunalover!
"
```

### 7. Alt Text per Immagini
**Tempo**: 30 minuti  
**Azione**: Cerca `<Image` in tutti i file e assicurati che OGNI immagine abbia un `alt` descrittivo.

**Esempi**:
- ❌ `alt="Immagine"` → ✅ `alt="Cervo maschio durante il bramito autunnale in Val di Rabbi"`
- ❌ `alt={post.title}` → ✅ `alt={`${post.title} - Fotografia naturalistica in Trentino Alto Adige`}`

**File da controllare**:
- `src/components/HeroSection.js`
- `src/components/PartnersSection.js`
- `src/app/page.js`
- Tutti i blog post (già fatto in `/blog/[slug]/page.js`)

---

## 🔍 SEO AVANZATO (Media Priorità)

### 8. Create Internal Links nei Blog Posts
**Tempo**: 15 minuti  
**Azione**: Quando espandi i blog posts, aggiungi link interni tra articoli correlati.

**Esempio** in `avvistamento-cervo-bramito.js`:
```javascript
content: "...Per fotografare gli avvistamenti, uso l'attrezzatura descritta nel [mio setup fotografico](/blog/attrezzatura-fotografica-montagna)..."
```

### 9. YouTube SEO Optimization
**Tempo**: 10 minuti per video  
**Azione** per ogni video YouTube:
1. **Titolo**: Keyword-rich (es. "BRAMITO del CERVO in Val di Rabbi | Documentario 4K")
2. **Descrizione**:
   - Primi 150 caratteri: Most important (mostrati in anteprima)
   - Include link: "👉 Leggi l'articolo completo: https://mountainfaunalover.com/blog/bramito-cervo"
   - Keywords: Val di Rabbi, fauna, Trentino, Swarovski Optik
3. **Tags**: Aggiungi 10-15 tags (Val di Rabbi, Fauna Alpina, Trentino, ecc.)
4. **Thumbnail Custom**: Text bold + High contrast
5. **Captions**: Attiva sottotitoli automatici italiani

### 10. Social Media Strategy
**Tempo**: Continuo  
**Azione**:
1. **Cross-posting**: Quando pubblichi un nuovo blog post →
   - Crea Instagram Reel/Post con link in bio
   - Crea TikTok corto (30-60 sec highlights)
   - Post LinkedIn con snippet + link
2. **Frequenza consigliata**:
   - YouTube: 1 video/settimana
   - Instagram: 3-4 post/settimana
   - TikTok: Daily short
3. **Template post**:
   ```
   🦌 Nuovo articolo sul blog!
   
   [Emoji] [Titolo accattivante]
   
   Scopri [beneficio principale]
   
   👉 Link in bio per leggere tutto
   
   #valdirabbi #fauna #trentino #swarovskioptik
   ```

---

## 📊 MONITORAGGIO POST-LANCIO

### 11. Lighthouse Test
**Tempo**: 5 minuti  
**Azione**:
1. Apri Chrome DevTools (F12)
2. Tab "Lighthouse"
3. Generate report (Desktop + Mobile)
4. **Target scores**:
   - Performance: > 85
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 95

**Se score < target**: Rivedi checklist SEO in `/seo-geo-checklist.md`

### 12. PageSpeed Insights
**Tempo**: 2 minuti  
**Azione**:
1. Vai su https://pagespeed.web.dev/
2. Testa: `https://mountainfaunalover.com`
3. Controlla **Core Web Vitals**:
   - LCP (Largest Contentful Paint): < 2.5s ✅
   - FID (First Input Delay): < 100ms ✅
   - CLS (Cumulative Layout Shift): < 0.1 ✅

### 13. Keyword Ranking Monitoring (Primi 30 giorni)
**Tempo**: 10 min/settimana  
**Azione**: Monitora posizionamento keywords in Google Search Console
- "val di rabbi trekking"
- "avvistamento cervi trentino"
- "swarovski optik recensioni"
- "fauna val di sole"

**Target primi 3 mesi**: Top 10 per keyword principali

---

## 💡 NICE-TO-HAVE (Bassa Priorità)

### 14. Privacy Policy & Cookie Policy
**Tempo**: 30 minuti  
**Azione**: Crea `/privacy` e `/cookies` pages (richiesto per GDPR se usi analytics)
- Usa template generator: https://www.iubenda.com/

### 15. FAQ Page
**Tempo**: 1 ora  
**Azione**: Crea `/faq` con domande comuni:
- Come avvistare cervi in Val di Rabbi?
- Miglior periodo per il bramito?
- Attrezzatura consigliata?

### 16. Newsletter Signup
**Tempo**: 2 ore  
**Azione**: Aggiungi form iscrizione newsletter (Mailchimp, ConvertKit, etc.)

---

## 📋 GESTIONE CORRENTE

### Gestione Blog
Per aggiungere nuovi articoli:
1. Apri `src/data/posts.js`
2. Aggiungi oggetto:
   ```javascript
   {
     slug: "titolo-articolo",
     title: "Titolo",
     excerpt: "Breve descrizione...",
     date: "2024-12-01",
     image: "/images/blog/foto.jpg",
     category: "Fauna",
     content: "Testo completo 800-1200 parole..."
   }
   ```

### Gestione Immagini
Struttura cartelle in `public/images/`:
- `branding/`: Loghi
- `home/`: Homepage
- `blog/`: Articoli blog
- `social/`: Social media
- `partners/`: Partner logos
- `founder/`: Founder page

**SEMPRE**: Comprimi immagini con Squoosh prima di caricarle!

---

## ✅ CHECKLIST PRE-LANCIO FINALE

Prima di andare live, verifica:

- [ ] Google Analytics configurato
- [ ] Tutte le immagini compresse (< 200KB ciascuna)
- [ ] Favicon installato
- [ ] Google Search Console verificato + sitemap inviata
- [ ] Bing Webmaster Tools configurato
- [ ] Blog posts espansi (min 800 parole ciascuno)
- [ ] Alt text su tutte le immagini
- [ ] Lighthouse score > 85 (tutte le metriche)
- [ ] Test su mobile (iPhone/Android)
- [ ] Test su desktop (Chrome/Firefox/Safari)
- [ ] Link check (no 404 pages)

**Quando tutti spuntati** → 🚀 **SEI PRONTO PER IL LANCIO!**

---

**Ultimo aggiornamento**: 24 Novembre 2024  
**Creato da**: Antigravity AI