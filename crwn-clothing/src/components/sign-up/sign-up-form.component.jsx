import { useState } from "react";
import "./sign-up.styles.scss";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defautlFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defautlFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defautlFormFields);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields(() => {
      return { ...formFields, [name]: value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email alredy in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          inputOtions={{
            type: "text",
            required: true,
            name: "displayName",
            value: displayName,
            onChange: changeHandler,
          }}
        />
        <FormInput
          label="Email"
          inputOtions={{
            type: "email",
            required: true,
            name: "email",
            value: email,
            onChange: changeHandler,
          }}
        />
        <FormInput
          label="Password"
          inputOtions={{
            type: "password",
            required: true,
            name: "password",
            value: password,
            onChange: changeHandler,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOtions={{
            type: "password",
            required: true,
            name: "confirmPassword",
            value: confirmPassword,
            onChange: changeHandler,
          }}
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
