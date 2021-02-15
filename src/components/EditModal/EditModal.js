import React, { useState } from "react";
function EditModal(props) {
  let [name, setName] = useState(props.editContacts.name);
  let [surname, setSurName] = useState(props.editContacts.surname);
  let [number, setNumber] = useState(props.editContacts.number);
  function handleSave() {
    console.log(props.contacts);
    let newContact = { ...props.editContacts };
    newContact.name = name;
    newContact.surname = surname;
    newContact.number = number;

    props.handleSaveContacts(newContact);
  }
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="inp-edit"
        ></input>
        <input
          type="text"
          onChange={(e) => setSurName(e.target.value)}
          value={surname}
          className="inp-edit"
        ></input>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          className="inp-edit"
        ></input>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default EditModal;
