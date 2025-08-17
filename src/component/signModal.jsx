import React, { useEffect } from "react";
import styled from "styled-components";

export default function SignupModal({ open, handleClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [open]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>

        <Title>Sign Up</Title>

        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />

        <PolicyText>
          By Signing up, you agree to our{" "}
          <a href="#" style={{ color: "green" }}>
            Terms of Service & Privacy Policy
          </a>
        </PolicyText>

        <SignUpButton>Sign Up</SignUpButton>

        <LoginText>
          Already have an account?{" "}
          <a href="#" style={{ color: "green" }}>Sign in</a>
        </LoginText>
      </ModalContainer>
    </Overlay>
  );
}

/* ==============>styled-components <============= */
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PolicyText = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
`;

const SignUpButton = styled.button`
  width: 100%;
  background: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`;

const LoginText = styled.p`
  text-align: center;
  margin-top: 15px;
`;
