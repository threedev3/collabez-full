import { useState } from "react";

const useFormHandler = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let errors = {};

    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!phone) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone Number must be digits only";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!message) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store form data
    const formData = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };

    // Log form data to the console
    console.log("Form Submitted: ", formData);

    if (validateForm()) {
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  const validateNewsLetter = () => {
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNewsLetter = (event) => {
    event.preventDefault();

    if (validateNewsLetter()) {
      setEmail("");
      setErrors({});
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    handleSubmit,
    handleNewsLetter,
  };
};

export default useFormHandler;
