import { compose, map } from 'ramda';

const filenames = [
    'ballers.jpg',
    'basketball.jpg',
    'bible.jpg',
    'birds.jpg',
    'block.jpg',
    'break.jpg',
    'breakfast.jpg',
    'building.jpg',
    'chinaTown.jpg',
    'commute.jpg',
    'delight.jpg',
    'dosToros.jpg',
    'doubleTake.jpg',
    'duane.jpg',
    'ferry.jpg',
    'flatiron.jpg',
    'gnt.jpg',
    'green.jpg',
    'hat.jpg',
    'information.jpg',
    'jewish.jpg',
    'justMarried.jpg',
    'libertyBike.jpg',
    'libertyPhone.jpg',
    'manhattanBridge.jpg',
    'miami.jpg',
    'minettaTavern.jpg',
    'pigeonGuy.jpg',
    'primary.jpg',
    'rabbiRoad.jpg',
    'reflected.jpg',
    'rockawayTowel.jpg',
    'screenLight.jpg',
    'shelborne.jpg',
    'silhouette.jpg',
    'stare.jpg',
    'subwayScream.jpg',
    'tourist.jpg',
    'underground.jpg',
    'vanessas.jpg',
    'waiting.jpg',
    'walkingAway.jpg'
];

const photos = compose(
    map(item => ({
        path: `/portfolio/street/${item}`,
        alt: item.split('.')[0]
    }))
)(filenames);
export default photos;
