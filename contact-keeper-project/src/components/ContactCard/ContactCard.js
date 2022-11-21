import React, { useContext } from "react";
import contactContext from "../../contexts/ContactContext/ContactContext";

const ContactCard = ({ card, handleDelete }) => {
  const contextContact = useContext(contactContext);
  console.log(contextContact);
  return (
    <div>
      <div>{card.name}</div>
      <div>{card.email}</div>
      <div>{card.phone}</div>
      <div>{card.type}</div>

      <button onClick={() => contextContact.setContactForm(card)}>Edit</button>
      <button onClick={() => contextContact.handleDelete(card.id)}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
