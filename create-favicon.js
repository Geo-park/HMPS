import sharp from 'sharp';

// Create proper 32x32 favicon.png
sharp('public/favicon-cropped.png')
  .resize(32, 32, {
    fit: 'cover',
    position: 'center'
  })
  .png()
  .toFile('public/favicon.png')
  .then(() => {
    console.log('✓ favicon.png created successfully');
  })
  .catch((err) => {
    console.error('Error creating favicon:', err);
  });
