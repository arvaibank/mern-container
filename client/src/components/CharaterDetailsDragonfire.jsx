import React, { useState } from "react";
import "./Details.css";
import "../App.css";

function CharacterDetails({
  character,
  onAddMemberToCouncil,
  renderDeathByFire,
}) {
  const [alive, setAlive] = useState(true);
  const familyName = character.family.split(" ")[1];
  let banner = `./assets/${familyName}.jpg`;

  function deleteFromDataBase(character) {
    setAlive(false);
    fetch(`/api/dragonfire/${character._id}`, { method: "DELETE" });
  }

  return (
    <div>
      {alive ? (
        <div className="pic">
          <img src={banner} style={{ height: 550 }} alt="" />
          <div className="details">
            <img src={character.imgurl} alt="Loading" style={{ height: 400 }} />
            <div>Name: {character.name}</div>
            <div>Title: {character.title}</div>
            <div>Family: {character.family}</div>
            <div>Location: {character.location}</div>
            <div name="buttons">
              {!character.councilMember && (
                <button
                  className="header-btn"
                  onClick={() => onAddMemberToCouncil(character)}
                >
                  Add to Council
                </button>
              )}
              <button
                className="header-btn"
                onClick={() => deleteFromDataBase(character)}
              >
                Kill By Dragon Fire
              </button>
            </div>
          </div>
          <img src={banner} style={{ height: 550 }} alt="" />
        </div>
      ) : (
        <div>
          <div>
            <img src="./assets/dragon.gif" alt="load" style={{ height: 200 }} />
            <img src="./assets/dragon.gif" alt="load" style={{ height: 200 }} />
            <img src="./assets/dragon.gif" alt="load" style={{ height: 200 }} />
          </div>
          <img
            src={character.imgurl}
            alt="Loading"
            className="fade-out"
            style={{ height: 400 }}
          />
          <button
            className="header-btn fade-in"
            onClick={() => renderDeathByFire(character)}
          >
            back
          </button>
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;
