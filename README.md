# Emplifi Command Center

React aplikace převedená z Figma designu pro Command Center produkt z Emplifi platformy.

## Popis

Tento projekt je přesná implementace UI designu z Figmy pro Command Center obrazovku. Design je založen na Soul Design System od Emplifi.

## Technologie

- **React 19** + **TypeScript**
- **Vite** jako build tool
- **CSS** s design tokens z Figmy
- **Soul Design System** (Emplifi design system)

## Instalace

```bash
npm install
```

## Spuštění development serveru

```bash
npm run dev
```

## Build pro produkci

```bash
npm run build
```

## Struktura projektu

```
src/
├── components/
│   ├── PlatformNavigation/    # Levý sidebar s navigací
│   ├── Header/                 # Hlavní header s názvem
│   ├── CommandCenter/          # Hlavní obsahová oblast
│   ├── Notifications/           # Pravý sidebar s notifikacemi
│   └── Widgets/
│       ├── ValueWidget/         # Widgety s metrikami
│       └── TrendingWidget/     # Widget s trendy
├── assets/
│   ├── icons/                  # SVG ikony stažené z Figmy
│   ├── images/                 # Obrázky
│   └── charts/                 # Grafické prvky
└── styles/
    └── design-tokens.css       # CSS design tokens z Figmy
```

## Design Tokens

Všechny design tokens (barvy, fonty, spacing, shadows) jsou extrahovány z Figmy a uloženy v `src/styles/design-tokens.css`. Tyto hodnoty odpovídají přesně designu v Figmě.

## Stahování assetů z Figmy

Script pro stažení assetů je v `scripts/download-assets.js`. Spusť:

```bash
node scripts/download-assets.js
```

**Poznámka:** Pro fungování scriptu musí být Figma desktop app spuštěná a localhost server na portu 3845 musí být dostupný.

## Soul Design System

Projekt používá Soul Design System od Emplifi:
- [Soul Design System Documentation](https://soul.emplifi.io/latest/home/soul-design-system-LbXdwFUj)

## Licence

Private project - Emplifi
