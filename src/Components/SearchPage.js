import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 August to 30 August • 2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and bed</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
    </div>
  );
}

export default SearchPage;
