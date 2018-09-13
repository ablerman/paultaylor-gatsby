import numeral from 'numeral';

const count = 26;

const photos = [];

for (let i = 1; i <= count; i++) {
    const num = numeral(i).format('00');
    const o = {
        path: `/portfolio/events/alexa/alexa${num}.jpg`,
        alt: `Amazon ${num}`
    };
    photos.push(o);
}

export default photos;
