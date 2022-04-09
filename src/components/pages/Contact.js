import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-bold text-center">Contact</h1>
              <hr />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <a href="https://linkedin.com/in/calvin-t-320592167" className="link-dark">Linkedin</a>
              <br />
              <a href="turnerjrcalvin@gmail.com" className="link-dark">Email Me</a>
              <br />
              <a href="https://Github.com/CalvinTurner10" className="link-dark">Github</a>
            </div></div></div></section>
    );
  }

  

export default ContactForm;
