import numeral from 'numeral';

const count = 28;

const photos = [];

for (let i = 1; i <= count; i++) {
    const num = numeral(i).format('00');
    const o = {
        path: `/portfolio/events/krazyGlue/krazyGlue${num}.jpg`,
        alt: `KrazyGlue ${num}`
    };
    photos.push(o);
}

export default photos;
