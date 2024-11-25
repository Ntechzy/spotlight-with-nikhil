import React from 'react';
import Guest from './Guest';

const UpcomingGuest = () => {
  const profiles = [
    {
      name: "Ramesh Awasthi",
      position: "BJP MP, Kanpur",
      address: "Kanpur",
      image: "/assets/john_doe.jpg"
    },
    {
      name: "Rakesh Sachan",
      position: "Cabinet Minister U.P.",
      address: " Uttar Pradesh Government",
      image: "/assets/jane_smith.jpg"
    },
    {
      name: "Keshav Prasad Maurya",
      position: "Deputy Chief Minister U.P.",
      address: " Uttar Pradesh Government",
      image: "/assets/jane_smith.jpg"
    },
    {
      name: "Dr. Dinesh Sharma",
      position: "Ex Deputy Chief Minister U.P.",
      address: " Uttar Pradesh Government",
      image: "/assets/jane_smith.jpg"
    },
    {
      name: "Swatantra Dev Singh",
      position: "Cabinet Minister U.P.Government",
      address: " Uttar Pradesh Government",
      image: "/assets/jane_smith.jpg"
    },
  
  ];

  return (
    <div>
      <Guest profiles={profiles} title={"Upcoming Guests"} />
    </div>
  );
}

export default UpcomingGuest;
