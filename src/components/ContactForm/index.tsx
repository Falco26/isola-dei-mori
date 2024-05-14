import React, { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";

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

    const mailtoLink = `mailto:virgilio.difalco@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">La tua mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject">Oggetto:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Contenuto:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Send Email" />
      </form>
    </div>
  );
};
