import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import EditModal from "./components/EditModal/EditModal";
import ContactList from "./components/ContactList/ContactList";

function App() {
  let [contacts, setContacts] = useState([]);
  let [modal, setModal] = useState(false);
  let [editContacts, setEditContacts] = useState({});

  function handleContacts(newContact) {
    setContacts([...contacts, newContact]);
  }
  function handleCloseModal() {
    setModal(false);
  }
  function handleSaveContacts(newContact) {
    const newContacts = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContacts);
    setModal(false);
  }
  function handleEdit(index) {
    setEditContacts(contacts[index]);
    setModal(true);
  }
  function handleDelete(id) {
    let newContacts = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContacts);
  }

  return (
    <div>
      <h1>Contact Book</h1>
      <AddContact handleContacts={handleContacts}>hello</AddContact>
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditModal
          contacts={contacts}
          handleSaveContacts={handleSaveContacts}
          editContacts={editContacts}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
}

export default App;
