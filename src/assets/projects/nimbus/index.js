// Get images from this folder, any with .webp
const images = import.meta.glob('./*.webp', { eager: true });

// Get videos from this folder, any with .mp4.
const videos = import.meta.glob('./vid/*.mp4', { eager: true });

// Storage
const assets = {};

function processFiles(files) {
  Object.entries(files).forEach(([path, mod]) => {
    // Remove folder names and extensions
    const clean = path.replace('./', '').replace('vid/', '').replace(/\.(webp|mp4)$/, '');

    // Split filename at last underscore
    const lastUnderscore = clean.lastIndexOf('_');
    const name = clean.substring(0, lastUnderscore);
    const theme = clean.substring(lastUnderscore + 1);

    if (!assets[name]) assets[name] = {};
    assets[name][theme] = mod.default;
  });
}

// Process both images and videos
processFiles(images);
processFiles(videos);

export default assets;
