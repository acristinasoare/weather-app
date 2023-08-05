import React from "react";

function LocationDetails(props) {
  const { city, country } = props;
  return (
    <div>
      <h1 className="location details">{`${city}, ${country}`}</h1>
    </div>
  );
}

export default LocationDetails;
