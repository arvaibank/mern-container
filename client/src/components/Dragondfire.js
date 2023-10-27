import React from "react";
import { useState } from "react";
import CharaterDetailsDragonfire from "./CharaterDetailsDragonfire.jsx";

function Dragondfire({ characters , renderDeathByFire}) {
  const [deadCharacter, setDeadCharacter] = useState("");
  const [list, setList] = useState("");
  const [characterToKill , setCharaterToKill]=useState("")

  
  const handleSearch = async (value) => {
    setDeadCharacter(value);
    if (characters) {
      const result = await characters.filter((element) => {
        return (
          value &&
          element.name.toLowerCase().includes(value.toLowerCase()) &&
          element.isAlive === true
        );
      });
      setList(result);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Dracarys on ?"
        value={deadCharacter}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {list &&
        list.map((element, i) => (
          <h1
            key={i}
            className="options"
            onClick={(e) => {
                setCharaterToKill(element)
              setDeadCharacter("")
                setList(undefined)
                
            }}
          >
            {element.name}
          </h1>
        ))}
    {characterToKill !== "" && <CharaterDetailsDragonfire renderDeathByFire={renderDeathByFire} character={characterToKill} />} 
    </>
  );
}

export default Dragondfire;
