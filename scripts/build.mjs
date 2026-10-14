import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const name of ['index.html','styles.css','app.js'])await copyFile(name,`dist/${name}`);
await cp('assets','dist/assets',{recursive:true});
await copyFile('.nojekyll','dist/.nojekyll');
console.log('Static site built to dist/');
