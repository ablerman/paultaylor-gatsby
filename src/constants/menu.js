import AmazonPhotos from './amazonPhotos';
import EventsPhotos from './eventsPhotos';
import CYOPhotos from './cyoPhotos';
import PlacesPhotos from './placesPhotos';
import StreetPhotos from './streetPhotos';
import MusicPhotos from './musicPhotos';

import builder from './photosetBuilder';

const menu = [
    {
        name: 'events',
        location: '/events',
        photos: EventsPhotos,
        children: [
            {
                name: 'Amazon',
                title: 'Amazon Alexa // Smartlife Roadshow',
                location: '/events/amazon',
                photos: AmazonPhotos
            },
            {
                name: 'CYO',
                location: '/events/cyo',
                photos: CYOPhotos
            },
            {
                name: 'Hulu',
                location: '/events/hulu',
                photos: builder('hulu', 'hulu', 29)
            },
            {
                name: 'Krazy Glue',
                location: '/events/krazy_glue',
                photos: builder('krazyGlue', 'krazyGlue', 28)
            },
            {
                name: 'Lost In Space',
                location: '/events/lost_in_space',
                photos: builder('lostInSpace', 'lostInSpace', 36)
            },
            {
                name: 'Narcos',
                location: '/events/narcos',
                photos: builder('narcos', 'narcos', 27)
            },
            {
                name: 'National Geographic',
                location: '/events/national_geographic',
                photos: builder('natGeo', 'natgeo', 31)
            },
            {
                name: 'Panera',
                location: '/events/panera',
                photos: builder('panera', 'panera', 34)
            },
            {
                name: 'Pet Smart & Purina',
                location: '/events/pet_smart_and_purina',
                photos: builder('petSmart', 'petsmart', 33)
            },
            {
                name: 'Rossana Pansino',
                location: '/events/rossana_pansino',
                photos: builder('rossana', 'rossana', 22)
            },
            {
                name: 'Silk',
                location: '/events/silk',
                photos: builder('silk', 'silk', 36)
            },
            {
                name: 'Sonic',
                location: '/events/sonic',
                photos: builder('sonic', 'sonic', 46)
            },
            {
                name: 'Trick or Treat',
                location: '/events/trick_or_treat',
                photos: builder('unicefTrick', 'unicefTrick', 34)
            },
            {
                name: 'Water is Unfair',
                location: '/events/water_is_unfair',
                photos: builder('unicefWater', 'unicefWater', 45)
            },
            {
                name: 'WE tv',
                location: '/events/we_tv',
                photos: builder('weTV', 'weTV', 26)
            }
        ]
    },
    {
        name: 'places',
        location: '/places',
        children: [],
        photos: PlacesPhotos
    },
    {
        name: 'music',
        location: '/music',
        children: [],
        photos: MusicPhotos
    },
    {
        name: 'street',
        location: '/street',
        children: [],
        photos: StreetPhotos
    }
];
export default menu;
