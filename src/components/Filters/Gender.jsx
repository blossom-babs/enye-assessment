import React, { useState } from "react";

function Gender({ genderQuery }) {
  const [gender, setGender] = useState("");

  function getGender() {
    genderQuery(gender);
    setGender("the gender button contains this clicked");

    //console.log(gender);
  }

  return (
    <section className="controller">
      <div className="controller__buttons gender--btn">
        <button onClick={() => getGender}>filter by gender</button>
        <button>x</button>
      </div>
      <div className="controller__buttons payment--btn">
        <button>filter by payment method</button>
        <button>x</button>
      </div>
      <div className="controller__buttons payment--btn">
        <button>filter by payment method</button>
        <button>x</button>
      </div>
      <div className="controller__buttons payment--btn">
        <button>filter by payment method</button>
        <button>x</button>
      </div>
    </section>
  );
}

export default Gender;
