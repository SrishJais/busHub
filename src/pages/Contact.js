import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_heading">
        <h1>
          <span>Get in</span> TOUCH
        </h1>
      </div>
      <div className="contact_form">
        <div className="forminput">
          <form action="https://formspree.io/f/xleyyalz" method="POST">
            <input placeholder="Username" type="text" name="UserName" />
            <input placeholder="Email" type="email" name="email" />
            <textarea type="text" name="message" placeholder="Enter your message"cols="25" rows="10" />
            <div>
              <button className="submitbtn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
