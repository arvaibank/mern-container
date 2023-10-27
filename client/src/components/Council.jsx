import React, { useEffect, useState } from "react";
import "../App.css";

function Council({ characters, onKill }) {
  const [myCouncil, setMyCouncil] = useState([]);

  useEffect(() => {
    setMyCouncil(
      characters.filter(
        (char) => char.councilMember === true && char.isAlive === true
      )
    );
  }, [characters]);

  return (
    <div className="container">
      {myCouncil &&
        myCouncil.map((member, i) => (
          <div
            key={i}
            className={`chatactercards ${member.family.split(" ")[1]}`}
          >
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <img src={member.imgurl} alt={member.img}></img>
            <button
              className="header-btn"
              key={`btn${i}`}
              onClick={() => onKill(member)}
            >
              Kill
            </button>
          </div>
        ))}
    </div>
  );
}

export default Council;
