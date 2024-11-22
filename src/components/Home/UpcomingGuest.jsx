import React from 'react';
import Guest from './Guest';

const UpcomingGuest = () => {
  const profiles = [
    {
      name: "John Doe",
      position: "Software Engineer",
      address: "1234 Elm Street, Springfield, IL",
      image: "/assets/john_doe.jpg"
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      address: "4321 Maple Avenue, Chicago, IL",
      image: "/assets/jane_smith.jpg"
    },
    {
      name: "Mike Johnson",
      position: "UX Designer",
      address: "5678 Pine Street, Austin, TX",
      image: "/assets/mike_johnson.jpg"
    }
  ];

  return (
    <div>
      <Guest profiles={profiles} title={"Upcoming Guests"} />
    </div>
  );
}

export default UpcomingGuest;
