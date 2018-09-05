import numeral from 'numeral';
import capitalize from 'lodash.capitalize';

const builder = (event, filename, count) => {
    const photos = [];

    for (let i = 1; i <= count; i++) {
        const num = numeral(i).format('00');
        const o = {
            path: `/media/portfolio/events/${event}/${filename}${num}.jpg`,
            alt: `${capitalize(event)} ${num}`
        };
        photos.push(o);
    }
    return photos;
};
export default builder;
