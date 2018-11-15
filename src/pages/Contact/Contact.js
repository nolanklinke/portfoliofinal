import React from "react";
import ContactForm from "../../components/ContactForm";
import Nav from "../../components/Nav";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-view">
        <Nav />
        <div className="form-content">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
