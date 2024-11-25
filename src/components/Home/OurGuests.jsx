import React from 'react';
import Guest from './Guest';

const OurGuests = () => {
  const profiles = [
    {
      name: "Abhijeet Sanga",
      position: "BJP MLA",
      address: "Bithoor Constituency",
      image: "/assets/john_doe.jpg"
    },
    {
      name: "Surendra Maithani",
      position: "BJP MLA",
      address: "Govind Nagar Constituency",
      image: "/assets/jane_smith.jpg"
    },
    {
      name: "Annu Awasthi",
      position: "COMEDIAN | ACTOR",
      address: "Bollywood",
      image: "/assets/mike_johnson.jpg"
    }
  ];

  return (
    <div>
      <Guest profiles={profiles} title={"Guest Profiles"} />
    </div>
  );
}

export default OurGuests;
