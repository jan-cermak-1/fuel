#!/usr/bin/env node

/**
 * Script to download assets from Figma localhost server
 * Assets are served from http://localhost:3845/assets/
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of assets from Figma design
const assets = [
  // Platform Navigation
  'f3aae7a0dbf6f44dfd76bedd856fba2f84e12d8b.svg', // Logo
  '8ea4e6f493a50f91f6a03c59a7009c5507635cb9.svg', // Unified Analytics icon
  'ca4d626fbd6e60685c0fbbfc60de1e45e205996e.svg', // Publisher icon
  '1b722c748788815b0e3b92f805772c54398b475.svg', // Community icon
  '190c0e9a7b5c7c206e85b9b6440f4f0a01459011.svg', // Care icon
  'bb41040efc634b86e2b4b31831d835c7d646f41d.svg', // Content icon
  '70743c14cd29aaea09f00de4bd275934970cb6f7.svg', // UCG icon
  '75a92c0fee581bfc8c211a3d417a2fbc2f73b59f.svg', // Influencers icon
  'c00ec6e3daaa1f0ac7446bca67e204d6545f0e9b.svg', // Rating & Reviews icon
  '767ba94dd01f56ec8b2c2cec10ee50ff9a37004b.svg', // Bot icon
  '6936d070646c7a25ec1ae9f4f2baca6979885e52.svg', // Agent icon
  '41d639a135f60ef665aa9b1cdb9469e933f0680c.svg', // Plus icon
  '3ed4e6a440f6d3cc2a93fcb8549323372f5a9f56.svg', // Help icon
  'ff0ab7824fd27d7e26a9d6e96c8df957666da2c2.svg', // Settings icon
  '9ce1b58aecd4ef61664409fcdd66adf48254ccb2.png', // Avatar
  
  // Header
  'ec370347b4c9e3e2a0ac2ee7d22ac373da78877a.svg', // Online indicator
  '8d1ef639026f81774b958c4140a6756c92ece3c5.svg', // Fullscreen icon
  
  // Notifications
  '51016e237f4d2f26741154a5f2b78826b3ac164e.svg', // Notification icon
  'bcf67655703346aae1eae65d54e4f9f50c9a4441.svg', // Checkmark icon
  '9e813ad9f7b7fad106075afac6b35dea61ce7b99.svg', // Saved searches icon
  '1939ea4533bf3e507bfe41f4087c826088619571.png', // Notification image
  
  // Dividers
  '0d4d87eee6584fd7abd2d2285d2a29be37d7e32b.svg', // Divider vertical
  '82fa2b7526a7dd60c706b14a63dc57fdca7870d0.svg', // Divider horizontal
  
  // Charts and widgets
  '13e250b37655cbbe439f081f5a5ee228fa052e85.svg', // Campaign objective icon
  '7b1029fddb2d3a79371c60c8fb96bb4d48c68502.svg', // Arrow right
  '70fecfca464d6fc970583ef64be077c8f75998ed.svg', // X icon
  '8fcbf4c301bea55740b2db958bb3149a9053f820.svg', // Caret down
  '26ace46a7ee7233efdf204115c6a2e2dfa0e5940.svg', // Arrow up
  '419a48d1deb4807bf24f90379c78b8358b1b63ac.svg', // Line chart
  '27eea7c9864353525fa6b07172ca5a044becefc2.svg', // Divider stroke
  '8576e6167cd77638a88b440f6823da43b2929cc5.svg', // More options icon
  '13ca2775b44393bb99945b4fdc92d11824520bac.svg', // Arrow down
  'a957aceca063c8fac602bb98d62e1a463ad6fc29.svg', // Line chart average
  'c1f6b9580275d0c4c67a025a5b8e2e14db5319fa.svg', // Arrow up green
  'cc162e23c3ccb0ca8e39873b97917979f48c7677.svg', // Line chart average 2
];

const ASSETS_BASE_URL = 'http://localhost:3845/assets/';
const OUTPUT_DIR = path.join(__dirname, '../src/assets');

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function downloadAsset(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(outputPath)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        file.close();
        fs.unlinkSync(outputPath);
        downloadAsset(response.headers.location, outputPath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(outputPath);
        console.log(`✗ Failed to download: ${url} (Status: ${response.statusCode})`);
        resolve(); // Resolve anyway to continue
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
      console.log(`✗ Error downloading ${url}: ${err.message}`);
      resolve(); // Resolve anyway to continue
    });
  });
}

async function downloadAllAssets() {
  ensureDirectoryExists(OUTPUT_DIR);
  ensureDirectoryExists(path.join(OUTPUT_DIR, 'icons'));
  ensureDirectoryExists(path.join(OUTPUT_DIR, 'images'));
  ensureDirectoryExists(path.join(OUTPUT_DIR, 'charts'));
  
  console.log('Starting asset download from Figma...\n');
  
  for (const asset of assets) {
    const extension = path.extname(asset);
    let subDir = 'icons';
    
    if (extension === '.png') {
      subDir = 'images';
    } else if (asset.includes('chart') || asset.includes('line')) {
      subDir = 'charts';
    }
    
    const url = `${ASSETS_BASE_URL}${asset}`;
    const outputPath = path.join(OUTPUT_DIR, subDir, asset);
    
    await downloadAsset(url, outputPath);
  }
  
  console.log('\n✓ Asset download completed!');
  console.log('Note: If some assets failed, make sure Figma desktop app is running and the localhost server is accessible.');
}

downloadAllAssets().catch(console.error);

