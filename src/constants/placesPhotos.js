import { compose, map } from 'ramda';

const filenames = [
    'abelTasman.jpg',
    'airBalloon.jpg',
    'aquaWater.jpg',
    'auckland.jpg',
    'bangkok.jpg',
    'bangkokApartment.jpg',
    'cathedralCove.jpg',
    'deejai.jpg',
    'floatingVillage.jpg',
    'gap.jpg',
    'ghostTower.jpg',
    'girlScooter.jpg',
    'market.jpg',
    'mcgregor.jpg',
    'melbournePier.jpg',
    'morocco.jpg',
    'mountCook.jpg',
    'mountManganui.jpg',
    'napier.jpg',
    'paiCat.jpg',
    'petronas.jpg',
    'pier.jpg',
    'purpleSky.jpg',
    'redwoods.jpg',
    'reflection.jpg',
    'royspeak.jpg',
    'sapa.jpg',
    'skyTower.jpg',
    'taranaki.jpg',
    'thaiBoxing.jpg',
    'thaiMountains.jpg',
    'tongWithMe.jpg',
    'trainMarket.jpg',
    'ubud.jpg',
    'whararikiBeach.jpg'
];

const photos = compose(
    map(item => ({
        path: `/media/portfolio/places/${item}`,
        alt: item.split('.')[0]
    }))
)(filenames);
export default photos;
