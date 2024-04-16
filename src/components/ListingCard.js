import React, { useState } from "react";

function ListingCard({ listing, onDelete, onFavorite }) {
  const [favorite, setFavorite] = useState(false);
  const { id, description, image, location } = listing

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => onDelete(listing))
  }

  function handleFavoriteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        favorite: !favorite
      })
    })
    .then((r) => r.json())
    .then((favoriteListing) => {
      setFavorite((currentFavorite) => !currentFavorite);
      onFavorite(favoriteListing);
    });
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {listing.favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
