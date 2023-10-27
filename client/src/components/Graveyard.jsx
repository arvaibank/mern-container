import React, { useState } from "react";
import "../Graveyard.css";

function Graveyard({ characterData }) {
  const [deadCharacters, setdeadCharacters] = useState(characterData);

  function resurrectCharacter(id) {
    fetch(`/api/graveyard/?resurrectCharacterId=${id}`, {
      method: "PATCH",
    });
    updateCharacterData(id);
  }
  function updateCharacterData(id) {
    // eslint-disable-next-line
    characterData.map((element) => {
      if (element._id === id) {
        element.isAlive = true;
        setdeadCharacters([...characterData]);
      }
    });
  }

  return (
    <div className="graveyard">
      {deadCharacters &&
        deadCharacters.map(
          (character) =>
            !character.isAlive && (
              <div key={character._id} className="rip">
                <h1>
                  {character.name}
                  <button
                    className="btn-resurrect"
                    onClick={() => {
                      resurrectCharacter(character._id);
                    }}
                  >
                    Resurrect
                  </button>
                </h1>
              </div>
            )
        )}
    </div>
  );
}

export default Graveyard;
