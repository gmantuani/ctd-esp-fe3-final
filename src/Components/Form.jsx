import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validateName = (value) => {
    return value ? value.length > 5 : false;
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSumbmitForm = (e) => {
    e.preventDefault();
    if (validateName(name) && /\S+@\S+\.\S+/.test(email)) {
      setMessage("Thanks " +
        name +
        ", check your email soon")
      console.log(name)
      console.log(email)
    } else {
      setErrorMessage("Invalid credentials")
    }
  };

  return (
    <>
      <form onSubmit={onSumbmitForm}>
        <input
          id="input1"
          placeholder="Full name"
          value={name}
          onChange={onChangeName}
        />
        <input
          id="input2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <button type="submit">Send</button>
      </form>
      <p style={{ textAlign: "center" }}> {errorMessage}</p>
      <p style={{ textAlign: "center" }}> {message} </p>
    </>
  );
};

export default Form;