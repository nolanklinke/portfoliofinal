import React from "react";
// import "./ContactForm.css";

const ContactForm = () => (
  <div className="container">
    <form action="https://formspree.io/nolan.klinke@gmail.com" method="POST">
      <div className="row">
        <div className="col-25">
          <label for="name">Name</label>
        </div>
        <div className="col-75">
          <input id="name" type="text" name="name" placeholder="Your Name" />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="email">Email</label>
        </div>
        <div className="col-75">
          <input
            id="email"
            type="email"
            name="_replyto"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="message">Message</label>
        </div>
        <div className="col-75">
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input
            style={{ height: "200px" }}
            id="message"
            type="text"
            name="message"
            placeholder="Write something..."
          />
        </div>
      </div>
      <input type="submit" value="Send" />
    </form>
  </div>
);
export default ContactForm;
