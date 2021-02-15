import React, { useState } from "react";

function AddContact(props) {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [number, setNumber] = useState("");
  function handleName(event) {
    setName(event.target.value);
  }
  function handleSurname(event) {
    setSurname(event.target.value);
  }
  function handleNumber(event) {
    setNumber(event.target.value);
  }
  function handleAdd() {
    if (!name || !surname || !number) {
      alert("Заполните все поля");
      return;
    }

    let obj = {
      name,
      surname,
      number,
      id: Date.now(),
    };
    props.handleContacts(obj);
    setName("");
    setNumber("");
    setSurname("");
  }
  return (
    <div className="input-div">
      {console.log(props.children)}
      <input
        value={name}
        className="inps"
        type="text"
        placeholder="name"
        onChange={handleName}
      />
      <input
        value={surname}
        className="inps"
        type="text"
        placeholder="surname"
        onChange={handleSurname}
      />
      <input
        value={number}
        className="inps"
        type="number"
        placeholder="number"
        onChange={handleNumber}
      />
      <button className="btn" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
}

export default AddContact;
