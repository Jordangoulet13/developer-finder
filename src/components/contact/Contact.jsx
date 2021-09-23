import styled from "styled-components";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = ({ fullName, email, ...props }) => {
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          window.alert("Thank you! I will get back to you shortly.");
          console.log(result);
        },
        (error) => {
          window.alert("Sorry, something went wrong. Please try again later.");
          console.log(error);
          console.log(process.env);
        }
      );
  };

  return (
    <section id="contact">
      <Heading about>Send {fullName} an Email</Heading>

      <Container>
        <Form onSubmit={sendEmail} ref={form}>
          <FormInput hidden type="text" name="client_name" value={email} />
          <FormInput
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <FormInput
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <FormTextArea
            name="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <StyledButton type="submit">SEND</StyledButton>
        </Form>
      </Container>
    </section>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heading = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  ${(p) =>
    p.name ? "width: 100%; border-bottom: 2px solid black;" : "margin:20px 0;"};

  ${(p) =>
    p.about ? " width:fit-content;border-bottom: 2px solid black;" : null};

  @media (max-width: 850px) {
    font-size: 20px;
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  margin: 1rem 0 3rem 0;
  @media only screen and (max-width: 800px) {
    margin: 0;
    width: 90%;
    align-self: auto;
  }
  @media only screen and (max-width: 800px) {
    width: 20rem;
  }
`;

const FormInput = styled.input`
  background-color: lightgray;
  border-radius: 12px;
  border: 0;
  font-size: 18px;
  height: 2.5rem;
  outline: 0;
  padding: 4px 20px 0;
  width: 45rem;

  margin: 1rem 0;
  @media only screen and (max-width: 800px) {
    width: 20rem;
  }
`;

const FormTextArea = styled.textarea`
  background-color: lightgray;
  border-radius: 12px;
  border: 0;
  font-size: 18px;
  height: 4rem;
  outline: 0;
  padding: 4px 20px 0;
  width: 45rem;
  margin: 1rem 0;

  @media only screen and (max-width: 800px) {
    width: 20rem;
  }
`;

const StyledButton = styled.button`
  background-color: lightgray;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: ${(p) => p.theme.textPrimaryColor};
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 25rem;
  align-self: center;
  transition: 600ms;

  &:hover {
    background-color: rgba(65, 72, 169, 0.5);
  }
  @media only screen and (max-width: 800px) {
    width: 15rem;
  }
`;
export default Contact;
