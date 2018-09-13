import quantize from 'quantize';

class Palette {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.imageData = null;
    }

    getDataFromEl(el) {
        this.width = el.width;
        this.height = el.height;
        // create the canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
        canvas.width = this.width;
        canvas.height = this.height;

        // paint the image onto the canvas

        ctx.drawImage(el, 0, 0);

        this.imageData = ctx.getImageData(0, 0, this.width, this.height);
        const pixels = this.buildPixels();
        canvas.parentNode.removeChild(canvas);
        return pixels;
    }

    buildPixels() {
        const pixels = [];
        // console.log(this.imageData)
        for (let i = 0; i < this.getPixelCount(); i++) {
            const r = this.imageData.data[i * 4 + 0];
            const g = this.imageData.data[i * 4 + 1];
            const b = this.imageData.data[i * 4 + 2];
            const a = this.imageData.data[i * 4 + 3];

            // if it's transparent, skip it
            if (a < 15) {
                continue;
            }

            // if it's white, skip it
            if (r > 250 && g > 250 && b > 250) {
                continue;
            }
            // console.log(r, g, b)
            pixels.push([r, g, b]);
        }
        return pixels;
    }

    getPixelCount() {
        return this.width * this.height;
    }
}

Palette.getPaletteFromIMG = function(el) {
    const p = new Palette();
    const pixels = p.getDataFromEl(el);
    const colors = quantize(pixels, 8).palette();
    return colors;
};

Palette.RGBtoHSL = function(r, g, b) {
    let segment = null;
    let shift = null;

    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var c = max - min;
    var hue;
    if (c === 0) {
        hue = 0;
    } else {
        switch (max) {
            case r:
                segment = (g - b) / c;
                shift = 0 / 60; // R° / (360° / hex sides)
                if (segment < 0) {
                    // hue > 180, full rotation
                    shift = 360 / 60; // R° / (360° / hex sides)
                }
                hue = segment + shift;
                break;
            case g:
                segment = (b - r) / c;
                shift = 120 / 60; // G° / (360° / hex sides)
                hue = segment + shift;
                break;
            case b:
                segment = (r - g) / c;
                shift = 240 / 60; // B° / (360° / hex sides)
                hue = segment + shift;
                break;
            default:
                console.log('Unknown color: ', max);
        }
    }
    // hue is in [0,6], scale it up
    hue = hue * 60;
    const sat = (max - min) / (1 - Math.abs(max + min - 1));
    const lum = (max + min) / 2;
    return [hue, sat, lum];
};

export default Palette;
