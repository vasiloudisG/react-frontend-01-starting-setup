import React from 'react';

import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Big Ben',
    description: 'One of the most famous towers in the world!',
    imageUrl: 'https://imgsrv2.voi.id/CxrJ2NgxvrLtYorH7GEA3MgBpNeSbjcJ9IamdHcs3lw/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy82NTk1LzIwMjAwNTMxMTUzNC1tYWluLmNyb3BwZWRfMTU5MDkxNDA5NC5qcGVn.jpg',
    address: 'London SW1A 0AA, United Kingdom',
    location: {
      lat: 51.5007292,
      lng: -0.1268194
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId; //gives access to the userId, is encoded to the url
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId); //h filer psaxnei ton pinaka DUMMY kai epistrefei enan kaionoyrgio me thn synthikh poy dwthike
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;