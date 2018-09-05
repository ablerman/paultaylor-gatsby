import { compose, map } from 'ramda';

const filenames = [
    'JoeyBadass.jpg',
    'actionBronson.jpg',
    'aluna.jpg',
    'andyC.jpg',
    'asap.jpg',
    'baauer.jpg',
    'bar.jpg',
    'bicep.jpg',
    'charlie.jpg',
    'damien.jpg',
    'dangelo.jpg',
    'daniel.jpg',
    'darius.jpg',
    'daughter.jpg',
    'dimensions.jpg',
    'dj.jpg',
    'djEZ.jpg',
    'ellesseGirl.jpg',
    'ellie.jpg',
    'evolutionCrowd.jpg',
    'example.jpg',
    'fanGirl.jpg',
    'flava.jpg',
    'frank.jpg',
    'guitar.jpg',
    'gunshots.jpg',
    'hands.jpg',
    'handshake.jpg',
    'heidi.jpg',
    'jake.jpg',
    'jamBaxter.jpg',
    'joey.jpg',
    'jonHopkins.jpg',
    'joyOrbison.jpg',
    'jrocc.jpg',
    'jurassic5.jpg',
    'jurassicPortrait.jpg',
    'kelis.jpg',
    'kelisPortrait.jpg',
    'killerMike.jpg',
    'loveboxCrowd.jpg',
    'lunice.jpg',
    'moat.jpg',
    'nozstockCrowd.jpg',
    'nozstockThree.jpg',
    'oceanWisdom.jpg',
    'onemanHideout.jpg',
    'paak.jpg',
    'paloma.jpg',
    'parklifeCrowd.jpg',
    'planB.jpg',
    'premier.jpg',
    'purplePortrait.jpg',
    'rita.jpg',
    'ritaDance.jpg',
    'robertPlant.jpg',
    'rodiganSmoke.jpg',
    'rudimentalThree.jpg',
    'sgpPaint.jpg',
    'shoulders.jpg',
    'skream.jpg',
    'skreamHideout.jpg',
    'soulClap.jpg',
    'stormzy.jpg',
    'stormzyUp.jpg',
    'submotion.jpg',
    'tinchy.jpg',
    'vaccines.jpg',
    'weAreCrowd.jpg',
    'wretch32.jpg'
];

const photos = compose(
    map(item => ({
        path: `/media/portfolio/music/${item}`,
        alt: item.split('.')[0]
    }))
)(filenames);
export default photos;
