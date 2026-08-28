# FinanzasNT — Documentación del proyecto

App web de comparación financiera para Argentina. Single-file HTML/CSS/JS, sin frameworks ni build step.

**Archivo principal:** `index.html` (todo inline: HTML, CSS y JavaScript)
**Servidor local:** `server.ps1` (PowerShell) o `npx http-server -p 8080 -a 0.0.0.0`
**Acceso celular:** `http://192.168.0.4:8080` (misma red Wi-Fi)

---

## ¿Qué hace la app?

Cuatro secciones:

### 1. BILLETERAS
Billeteras virtuales ordenadas por TNA descendente. **Datos hardcodeados** — actualizar manualmente desde billeterasvirtuales.com.ar.
- Fuente oficial de tasas y logos: **https://billeterasvirtuales.com.ar/**
- Logos: `bv(nombre)` → `https://billeterasvirtuales.com.ar/assets/images/{nombre}.png`
- **NO mostrar fuentes visiblemente en pantalla** — solo usarlas internamente
- Subtítulo de cada card: ninguno. Solo el porcentaje + "TNA" en gris chiquito abajo
- **Frecuencia de actualización recomendada: semanal**

### 2. PLAZOS FIJOS
Tasas TNA de plazos fijos bancarios. **30 bancos curados** de la lista oficial.
- **Datos en vivo:** ArgentinaDatos API → `https://api.argentinadatos.com/v1/finanzas/tasas/plazoFijo`
  - Formato: JSON con campos `entidad`, `tnaClientes` (decimal, ej: 0.175 = 17.5%), `logo`, `enlace`
  - Filtro: PF_WHITELIST (keywords) + PF_EXCLUDE (tierra del fuego)
- **Fallback inmediato:** 30 bancos hardcodeados con datos de mayo 2026
- **Estrategia UX:** muestra fallback al instante, actualiza en background con datos live
- Badge: "TNA en pesos" (sin mencionar fuente)

### 3. DÓLAR
Cotizaciones en tiempo real. **Completamente automático.**
- **API primaria:** `https://dolarapi.com/v1/dolares` (CORS-friendly, gratis)
- **API fallback:** `https://api.bluelytics.com.ar/v2/latest`
- Tipos: Blue, Oficial, Bolsa (MEP), Contado con Liqui, Cripto, Tarjeta
- Orden: Blue → Oficial → Bolsa → CCL → Cripto → Tarjeta

### 4. BROKERS (menú hamburguesa → "Brokers")
Brokers argentinos ordenados por comisión de menor a mayor. **Datos hardcodeados.**
- Fuente: https://rfinanciera.github.io/Comisiones.brokers/
- 8 brokers para acciones y CEDEARs (comisiones sin IVA ni derechos de mercado)
- **Frecuencia de actualización recomendada: mensual o cuando haya cambios**
- El % de cada broker es tappable → pre-carga la calculadora de comisiones

---

## Paleta de colores

```css
:root {
  --bg-1: #010609;
  --bg-2: #060e1c;
  --bg-3: #0a2040;
  --card:  rgba(255,255,255,0.04);
  --border: rgba(255,255,255,0.07);
  --accent-btn:  #b0eeff;
  --accent-text: #00e8ff;
  --text-main: #dce4f0;
  --text-sub:  rgba(255,255,255,0.42);
}
```

Fondo: `linear-gradient(to bottom, #000810 0%, #000e28 45%, #001255 75%, #002878 100%)` con `background-attachment: fixed`

---

## Reglas de diseño / UX

- **NO mostrar fuentes de datos** visiblemente en ninguna parte (ni ArgentinaDatos, BCRA, dolarapi, etc.)
- Tabs inactivos: texto `rgba(255,255,255,0.82)` (blanco). Tab activo: negro sobre fondo celeste
- Badges top 3: ribbons metálicos (oro, plata, bronce) con CSS clip-path
- Footer social: Instagram (gradiente real) + TikTok (blanco con sombra roja/cyan) — en todas las secciones incluido overlay brokers

---

## Helpers de logos

```javascript
const wiki  = f => `https://upload.wikimedia.org/wikipedia/commons/${f}`;
const gplay = h => `https://play-lh.googleusercontent.com/${h}=w512-h512`;
const bv    = f => `https://billeterasvirtuales.com.ar/assets/images/${f}.png`;
const gfav  = d => `https://www.google.com/s2/favicons?sz=256&domain=${d}`;
```

---

## BILLETERAS_DATA (27 ago 2026) — actualizar desde billeterasvirtuales.com.ar

```javascript
{ name: 'Carrefour Banco', tna: 21.00 }
{ name: 'Fiwind',          tna: 20.00 }
{ name: 'Naranja X',       tna: 19.00 }
{ name: 'Lemon Cash',      tna: 19.00 }
{ name: 'Prex',            tna: 18.85 }
{ name: 'Mercado Pago',    tna: 18.17 }
{ name: 'Ualá',            tna: 18.00 }
{ name: 'Personal Pay',    tna: 17.89 }
{ name: 'Taca Taca',       tna: 17.52 }
{ name: 'Cocos Pay',       tna: 17.27 }
{ name: 'Claro Pay',       tna: 17.16 }
{ name: 'Brubank',         tna: 17.00 }
{ name: 'YPF',             tna: 16.89 }
{ name: "Let'sBit",        tna: 16.79 }
{ name: 'AstroPay',        tna: 16.15 }
{ name: 'Banco Galicia',   tna: 15.80 }
{ name: 'Supervielle',     tna: 15.00 }
```

---

## PF_FALLBACK (mayo 2026) — 30 bancos curados

```javascript
['Banco Masventas',                     24.00],
['Banco Voii',                          24.00],
['Crédito Regional Cía. Financiera',    24.00],
['Banco Meridian',                      24.00],
['Banco CMF',                           23.00],
['Banco Bica',                          23.00],
['Banco del Sol',                       22.00],
['Reba Cía. Financiera',                22.00],
['Banco Mariva',                        21.00],
['Bibank',                              21.00],
['Bancor',                              21.00],
['Banco Dino',                          20.00],
['Banco Julio',                         20.00],
['Banco Provincia de Buenos Aires',     20.00],
['Banco de Comercio',                   19.00],
['Banco de Formosa',                    19.00],
['Ualá',                                19.00],
['BBVA Argentina',                      19.00],
['Banco del Chubut',                    19.00],
['Banco Galicia',                       18.00],
['Banco Macro',                         18.00],
['Banco Comafi',                        18.00],
['Banco Hipotecario',                   18.00],
['Banco Nación',                        18.00],
['ICBC Argentina',                      18.00],
['Banco Credicoop',                     18.00],
['Banco Ciudad',                        17.00],
['Banco Patagonia',                     16.00],
['Banco Santander',                     15.00],
```
**Excluidos (NUNCA incluir, ni en fallback ni en datos live):**
- Banco Provincia de Tierra del Fuego → en `PF_EXCLUDE`
- Banco de la Provincia de Córdoba → en `PF_EXCLUDE` (keyword: 'córdoba'/'cordoba')

**Nombres normalizados:**
- "Banco Provincia de Buenos Aires" / "Banco de la Provincia de Buenos Aires" → mostrar siempre como **"Banco Provincia"** (normalizado en `cleanName()` y en `PF_FALLBACK`)

---

## BROKERS_DATA (mayo 2026)

```javascript
{ name: 'Veta Cap',      pct: 0.15 }
{ name: 'Eco Valores',   pct: 0.33 }
{ name: 'Cocos Capital', pct: 0.45 }
{ name: 'IOL',           pct: 0.50 }
{ name: 'Balanz',        pct: 0.50 }
{ name: 'Bull Market',   pct: 0.50 }
{ name: 'PPI',           pct: 0.60 }
{ name: 'Rava Bursátil', pct: 0.80 }
```
Fuente: comisiones para acciones/CEDEARs online, sin IVA ni derechos de mercado (BYMA).

---

## Calculadoras flotantes (botón 🧮 bottom-left, z-index 400)

### Calculadora de rendimiento (tabs principales)
- Inputs: monto ($) + TNA (%)
- Outputs: rendimiento diario, mensual, anual + capital en 1 mes

### Calculadora de comisiones (overlay brokers)
- Inputs: monto ($) + comisión broker (%, auto-formatea: "015" → "0,15")
- Outputs: comisión ($) + Der. mercado BYMA $500 fijo + IVA 21% + Total
- Fórmula: IVA = (comisión + $500) × 21%
- Tapping el % de un broker pre-carga la comisión automáticamente

### Speech bubble (hint)
- Aparece 3s después de cargar la app: "🧮 Calculá tu ganancia"
- Reaparece cada 50 segundos
- En brokers muestra: "🧮 Calculá tu comisión"
- Dura 4 segundos, es tappable (abre la calc directamente)

---

## Footer redes sociales
- Instagram: `@rodrigogalarza__` — ícono con gradiente real (amarillo→naranja→rosa→violeta→azul)
- TikTok: `@rodrigogalarzaa` — ícono blanco con sombras roja+cyan (efecto glitch real)
- Aparece en todas las secciones + overlay brokers

---

## Estructura de funciones clave

```
loadBilleteras()         — renderiza BILLETERAS_DATA (hardcoded)
renderBilleteras()       — genera HTML con bankAvatar() para cada billetera
loadPlazos()             — muestra PF_FALLBACK inmediatamente, llama refreshFromArgentinaDatos()
refreshFromArgentinaDatos() — baja JSON de argentinadatos.com en background
parsePlazosCSV()         — legacy (no usada, reemplazada por ArgentinaDatos)
loadDolar()              — llama fetchDolar()
fetchDolar()             — intenta dolarapi.com, fallback a bluelytics.com.ar
renderPlazos(data)       — renderiza lista de bancos con bankAvatar() + barras TNA
renderDolar(data)        — renderiza las 6 cotizaciones
renderBrokers()          — genera HTML de brokers con ribbons y pct tappable
bankAvatar(name)         — logo real (BANK_LOGOS) o iniciales coloreadas como fallback
toggleCalc()             — context-aware: abre calc rendimiento o calc comisiones según sección
showCalcBubble()         — muestra speech bubble hint cada 50s
useBrokerInCalc(pct)     — pre-carga comisión en calc y la abre
calcularBroker()         — calcula comisión + BYMA + IVA + total
toggleMenu(e)            — abre/cierra dropdown del menú hamburguesa
openBrokers()            — abre overlay de brokers
closeBrokers()           — cierra overlay de brokers
```

---

## Problemas conocidos y soluciones aplicadas

| Problema | Solución |
|----------|----------|
| CORS desde file:// | ArgentinaDatos tiene CORS nativo, sin proxies |
| Logos borrosos | Wikimedia SVG (vectorial) + gstatic a 256px |
| Logos blancos (Bica, Bibank) | Fondo navy `#0c1f3f` |
| 'ual' matcheaba 'mutual' | Cambiado a 'uala' en PF_WHITELIST |
| 'cocos' matcheaba dos entidades | 'cocos pay' y 'cocos cap' separados |
| Tab switching lento | Fallback mostrado al instante, live data en background |
| Calc invisible en overlay brokers | z-index 400 (overlay es 250) |
| Campo % broker tomaba "015" como 15% | Campo text con auto-formato: dígitos ÷ 100 |

---

## Pendiente / Mantenimiento recurrente

- [ ] **Semanal:** Actualizar tasas de BILLETERAS_DATA desde billeterasvirtuales.com.ar
- [ ] **Mensual o ante cambios:** Actualizar BROKERS_DATA desde rfinanciera.github.io/Comisiones.brokers
- [ ] **Automático:** Plazos Fijos y Dólar se actualizan solos (ArgentinaDatos + dolarapi.com)
- [ ] Actualizar PF_FALLBACK cuando las tasas de referencia cambien significativamente
- [ ] **Hosting:** pendiente publicar en link público (ver opciones abajo)

---

## Hosting — opciones para publicar

La app es un solo archivo `index.html`. Las opciones más simples:

1. **Netlify Drop** — https://app.netlify.com/drop
   - Arrastrar la carpeta `FinanzasNT` al navegador → link instantáneo
   - No requiere cuenta para prueba, sí para mantener el link

2. **Cloudflare Pages** — https://pages.cloudflare.com
   - Cuenta gratis, drag & drop de la carpeta → link permanente
   - Muy confiable, sin límite de ancho de banda

3. **Vercel** — https://vercel.com
   - Cuenta gratis con GitHub o email
   - CLI: `npx vercel` en la carpeta del proyecto
