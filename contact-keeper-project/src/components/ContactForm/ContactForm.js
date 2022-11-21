import React, { useState, useContext } from "react";
import { PERSONAL, PROFESSIONAL } from "../../configs/constants";
import contactContext from "../../contexts/ContactContext/ContactContext";
import { initialValues } from "../../pages/HomePage/HomePage";

const ContactForm = (props) => {
  //Props
  const { onAddContact, contactForm, setContactForm } = props;
  //State
  const contextContact = useContext(contactContext);

  //Functions
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddContact(contactForm);
    setContactForm(initialValues);
  };
  const { name, email, phone, type } = contactForm;
  const isDisabledSubmitButton = !name && !email && !phone;
  return (
    <div className="contact-form-container">
      <h4 className="text-center">Add Contact</h4>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="name">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="name">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={onChangeHandler}
            />
            <div className="mb-3">
              <div>
                <p>Contact type</p>
                <div className="d-flex">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      id="exampleRadios1"
                      defaultValue="option1"
                      checked={type === PERSONAL}
                      onChange={onChangeHandler}
                      value={PERSONAL}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Personal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      id="exampleRadios2"
                      checked={type === PROFESSIONAL}
                      onChange={onChangeHandler}
                      value={PROFESSIONAL}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Professional
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isDisabledSubmitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
