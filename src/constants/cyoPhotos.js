import numeral from 'numeral'
const count = 25;


const photos = [];

for(let i=1; i <= count; i++) {
  const num = numeral(i).format('00');
  const o = {
    path: `/media/portfolio/events/cyo/cyo${num}.jpg`,
    alt: `CYO ${num}`,
  }
  photos.push(o)
}

export default photos;

