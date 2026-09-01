import sharp from 'sharp';

sharp('public/favicon-cropped.png')
  .resize(32, 32)
  .toFile('public/favicon.ico')
  .then(() => {
    console.log('✓ favicon.ico created successfully');
  })
  .catch((err) => {
    console.error('Error creating favicon:', err);
  });
