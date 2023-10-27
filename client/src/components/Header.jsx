import { useState } from "react";

import "../App.css";

function Header({
  onCouncil,
  onClickCharacter,
  characters,
  onCharacterDetails,
  onGraveyard,
  onDragonfire,
  onMarriage,
}) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(undefined);

  const handleChange = (value) => {
    setInput(value);
    const result = characters.filter((element) => {
      return (
        value &&
        element.name.toLowerCase().includes(value.toLowerCase()) &&
        element.isAlive === true
      );
    });
    setSelect(result);
  };

  return (
    <>
      <div className="main-title">
        <div> Game of Thrones </div>
        <button className="header-btn" onClick={() => onClickCharacter()}>
          Characters
        </button>
        <button className="header-btn" onClick={() => onCouncil()}>
          My Council
        </button>
        <button className="header-btn" onClick={() => onGraveyard()}>
          Graveyard
        </button>
        <button className="header-btn" onClick={() => onDragonfire()}>
          Death by Dragonfire
        </button>
        <button className="header-btn" onClick={() => onMarriage()}>
          Marriage
        </button>
        <input
          className="searchField"
          placeholder="Type for search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div>
        {select &&
          select.map((element, i) => (
            <h1
              key={i}
              className="options"
              onClick={() => {
                setInput("");
                setSelect(undefined);
                onCharacterDetails(element);
              }}
            >
              {element.name}
            </h1>
          ))}
      </div>
    </>
  );
}

export default Header;
