import React from "react";

function Characters({ characters, onCharacterDetails }) {
  return (
    <div className="container">
      {characters.map(
        (character) =>
          character.isAlive && (
            <div
              key={character._id}
              className={`chatactercards ${character.family.split(" ")[1]}`}
            >
              <h2>{character.name}</h2>
              <h3>{character.title}</h3>
              <img src={character.imgurl} alt={character.img}></img>
              <button onClick={() => onCharacterDetails(character)}>
                Character Details
              </button>
            </div>
          )
      )}
    </div>
  );
}

export default Characters;
