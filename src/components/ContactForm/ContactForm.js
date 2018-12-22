import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <div className="container">
    <div className="formTitle">
      <h1>Contact Me</h1>
      <p>
        I'd love to work with you! Fill out the form below and I will be in
        touch shortly.
      </p>
    </div>
    <form action="https://formspree.io/nolan.klinke@gmail.com" method="POST">
      <div className="row">
        <div className="col-20">
          <label htmlFor="name">Name</label>
        </div>
        <div className="col-80">
          <input id="name" type="text" name="name" placeholder="Your Name" />
        </div>
      </div>
      <div className="row">
        <div className="col-20">
          <label htmlFor="email">Email</label>
        </div>
        <div className="col-80">
          <input
            id="email"
            type="email"
            name="_replyto"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-20">
          <label htmlFor="message">Message</label>
        </div>
        <div className="col-80">
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <textarea
            style={{ height: "200px" }}
            id="message"
            type="text"
            name="message"
            placeholder="Write
            something..."
          />
        </div>
      </div>
      <div id="btn">
        <input type="submit" value="Send" />
      </div>
    </form>
  </div>
);
export default ContactForm;
