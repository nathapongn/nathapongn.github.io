const images = import.meta.glob('./*.webp', { eager: true });

const assets = {};

Object.entries(images).forEach(([path, mod]) => {
  // e.g. "./cover-mobile_dark.webp" → "cover-mobile_dark"
  const file = path.replace('./', '').replace('.webp', '');

  // Split at the LAST underscore to avoid issues with filenames containing "_"
  const lastUnderscore = file.lastIndexOf('_');
  const name = file.substring(0, lastUnderscore);  // cover-mobile
  const theme = file.substring(lastUnderscore + 1); // dark

  if (!assets[name]) assets[name] = {};
  assets[name][theme] = mod.default;
});

export default assets;
