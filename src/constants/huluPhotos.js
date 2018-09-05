import numeral from 'numeral';

const count = 29;

const photos = [];

for (let i = 1; i <= count; i++) {
    const num = numeral(i).format('00');
    const o = {
        path: `/media/portfolio/events/hulu/hulu${num}.jpg`,
        alt: `Hulu ${num}`
    };
    photos.push(o);
}

export default photos;
