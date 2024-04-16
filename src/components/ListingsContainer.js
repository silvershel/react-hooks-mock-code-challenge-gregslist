import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete, onFavorite }) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id} 
            listing={listing} 
            onDelete={onDelete} 
            onFavorite={onFavorite}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
