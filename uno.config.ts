import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: {
    'flex-center': 'items-center justify-center',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Space Grotesk',
        serif: 'Ovo',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
