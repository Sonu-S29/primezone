
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');
const fs = require('fs');

const inputDir = process.argv[2];
const outputDir = process.argv[3];

if (!inputDir || !outputDir) {
    console.error('Please provide input and output directories.');
    console.log('Usage: node imagemin-script.js <inputDir> <outputDir>');
    process.exit(1);
}

const optimizeImages = async (input, output) => {
    try {
        await imagemin([path.join(input, '*.{jpg,jpeg,png}')], {
            destination: output,
            plugins: [
                imageminMozjpeg({ quality: 80 }),
                imageminPngquant({
                    quality: [0.6, 0.8]
                })
            ]
        });
        console.log('Images optimized successfully!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
};

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

optimizeImages(inputDir, outputDir);
