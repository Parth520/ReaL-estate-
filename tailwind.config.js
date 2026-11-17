// Brand tokens live here. Change colours/fonts to re-skin the whole site.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#22201d', bone: '#ece6d9', paper: '#f6f2ea', brass: '#a98652', stone: '#7b7266', moss: '#3f4538' },
    fontFamily: { serif: ['Newsreader', 'Georgia', 'serif'], sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'] },
  } },
}
