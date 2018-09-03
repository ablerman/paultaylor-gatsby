import numeral from 'numeral'

const count = 28;

const photos = [];

for(let i=1; i<=count; i++) {
  const num = numeral(i).format('00');
  const o = {
    path: `/media/portfolio/events/lostInSpace/lostInSpace${num}.jpg`,
    alt: `LostInSpace ${num}`
  }
  photos.push(o)
}

export default photos;
