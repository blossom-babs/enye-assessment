// import React, { useState } from "react";
// import avatar from "../../images/neutralavatar.png";
// import Female from "../../images/femaleavatar.jpg";
// import Male from "../../images/maleavatar.png";

function Card({ item }) {
  console.log(item);
  //   let avatarImage;

  //   if (item.Gender === "Male") {
  //     avatarImage = `${Male}`;
  //   }
  //   if (item.Gender === "Female") {
  //     avatarImage = `${Male}`;
  //   }
  //   if (item.Gender === "Prefer to skip") {
  //     avatarImage = `${Male}`;
  //   }

  return (
    <div className="cards__card">
      <div className="cards__content">
        <h1 className="cards__title">
          {item.FirstName} <span>{item.LastName}</span>
        </h1>
        <p>
          <strong>Gender:--</strong>
          <span>{item.Gender}</span>
        </p>
        <p>
          <strong>Email:</strong>
          {item.Email}
        </p>
        <p>
          <strong>Domain Name:</strong>
          {item.DomainName}
        </p>
        <p>
          <strong>URL:</strong>
          {item.URL}
        </p>
      </div>
    </div>
  );
}

export default Card;
