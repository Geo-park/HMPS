import sharp from 'sharp';
import toIco from 'to-ico';
import { writeFile } from 'fs/promises';

const source = sharp('public/favicon-cropped.png').resize({
  fit: 'cover',
  position: 'center'
});

const createFavicons = async () => {
  const pngs = await Promise.all(
    [16, 32, 48].map((size) => source.clone().resize(size, size).png().toBuffer())
  );

  await writeFile('public/favicon.png', pngs[1]);
  await writeFile('public/favicon.ico', await toIco(pngs));
  console.log('Favicon PNG and ICO created successfully');
};

createFavicons().catch((error) => {
  console.error('Error creating favicons:', error);
  process.exitCode = 1;
});
