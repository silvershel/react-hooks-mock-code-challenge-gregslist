import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then ((r) => r.json())
    .then((listings) => {
      setListings(listings);;
    })
  }, [])

  
  function handleSearch(searchTerm) {
    let filteredListings = listings.filter((listing) => {
      if (listing.description.includes(searchTerm)) {
        return listing;
      }
    })
    setListings(filteredListings);
  }

  function handleDeleteListings(deletedListing) {
    let updatedListings = listings.filter((listing) => listing !== deletedListing)
    setListings(updatedListings);
  }

  function handleFavoriteListings(updatedListing) {
    const favoriteListings = listings.map((listing) => {
      if (listing.id === updatedListing.id) {
        return updatedListing;
      } else {
        return listing;
      }
    })
    setListings(favoriteListings);;
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer 
        listings={listings}
        onDelete={handleDeleteListings} 
        onFavorite={handleFavoriteListings}
      />
    </div>
  );
}

export default App;
