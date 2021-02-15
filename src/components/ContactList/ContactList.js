import React from "react";

function ContactList({ contacts, handleDelete, handleEdit }) {
  return (
    <div className="list">
      {contacts.map((item, index) => (
        <ul key={item.id}>
          <li>name: {item.name}</li>
          <li>surname: {item.surname}</li>
          <li>number: {item.number}</li>
          <button onClick={() => handleDelete(item.id)}>&times;</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </ul>
      ))}
    </div>
  );
}

export default ContactList;
