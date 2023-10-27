import React, { useEffect, useState } from "react";

function Marriage({ characters, onKill, onSave }) {
  const [males, setMales] = useState(null);
  const [females, setFemales] = useState(null);
  const [mother, setMother] = useState(null);
  const [father, setFather] = useState(null);
  const [child, setChild] = useState(null);
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    const males = characters.filter((char) => char.sex === "male");
    setMales(males);
    const females = characters.filter((char) => char.sex === "female");
    setFemales(females);
  }, []);

  const updateFather = (e) => {
    const father = characters.filter((char) => char._id === e.target.value)[0];
    setFather(father);
  };

  const updateMother = (e) => {
    const mother = characters.filter((char) => char._id === e.target.value)[0];
    setMother(mother);
  };

  useEffect(() => {
    if (father && mother) {
      const child = {
        firstName: "",
        lastName: father.name.split(" ")[1],
        title: "",
        family: father.family,
        location: mother.location,
        sex: Math.floor(Math.random() * 10) % 2 === 0 ? "male" : "female",
      };
      setChild(child);
    }
  }, [mother, father]);

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  const saveChild = (firstName) => {
    const name = `${firstName} ${child.lastName}`;
    const newChild = {
      name: name,
      title: child.title,
      family: child.family,
      img: "",
      imgurl: "./assets/baby.jpg",
      councilMember: false,
      isAlive: true,
      location: child.location,
      sex: child.sex,
    };
    onSave(newChild);
  };

  const handleCreation = (e) => {
    if (firstName) {
      saveChild(firstName);
    } else {
      window.alert("Name your child!");
    }
  };

  return (
    males &&
    females && (
      <>
        <div>
          <label>Father</label>
          <select onChange={updateFather}>
            {males.map((man) => (
              <option key={man._id} value={man._id}>
                {man.name}
              </option>
            ))}
          </select>

          <label>Mother</label>
          <select onChange={updateMother}>
            {females.map((woman) => (
              <option key={woman._id} value={woman._id}>
                {woman.name}
              </option>
            ))}
          </select>

          {child && (
            <div className="details" style={{ background: "#67331e" }}>
              <div>Its {child.sex}!</div>
              <img src="./assets/baby.jpg" style={{height: 200}} alt=""></img>
              <div>Name your child! </div>
              <input
                defaultValue={""}
                name="firstname"
                id="firstname"
                onChange={handleChange}
              />
              <div>Last name: {child.lastName}</div>
              <div>Title: {child.title}</div>
              <div>Family: {child.family}</div>
              <div>Location: {child.location}</div>
              <button className="header-btn" onClick={handleCreation}>
                Keep
              </button>
              <button className="header-btn" onClick={onKill}>
                Kill
              </button>
            </div>
          )}
        </div>
      </>
    )
  );
}

export default Marriage;
