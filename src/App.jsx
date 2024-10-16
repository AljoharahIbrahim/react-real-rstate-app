import React from 'react';
import Properties from './components/Properties';
const properties = [
  {
    id: 1,
    title: "Charming Cottage",
    location: "123 Maple St, Springfield, IL",
    image: "/clay-banks-I4dFsMhbgsU-unsplash.jpg",
    price: 250000,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "456 Oak Ave, Springfield, IL",
    image: "/burak-arslan-tSzjnKOgT1s-unsplash.jpg",
    price: 300000,
  },
  {
    id: 3,
    title: "Spacious Family Home",
    location: "789 Pine Rd, Springfield, IL",
    image: "/timothy-buck-psrloDbaZc8-unsplash.jpg",
    price: 450000,
  },
];
export const App = () => {
  return (
    <>
      <h1>Real Estate Website</h1>
      <Properties properties={properties} />
    </>
  );
};

export default App;
