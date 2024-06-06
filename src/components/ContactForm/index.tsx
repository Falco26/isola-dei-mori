import React, { useState, ChangeEvent, FormEvent } from "react";
import "./style.css"; // Make sure this includes the Paper Input Style CSS
import { Stack } from "../Stack";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:info@isoladeimori.it?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          placeholder=" " /* Necessary for floating label */
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Nome</label>
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-group">
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder=" "
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject">Oggetto</label>
      </div>

      <div className="form-group">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder=" "
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="message">Messaggio</label>
      </div>

      <input type="submit" value="Send Email" />
    </form>
  );
};
