import { useState } from "react";
import "./sign-in.styles.scss";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailandPassword,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defautlFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defautlFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defautlFormFields);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields(() => {
      return { ...formFields, [name]: value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailandPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Wrong password");
      if (error.code === "auth/user-not-found") alert("User not found");
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Alredy have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
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
        <div className="buttons-container">
          <Button type="submit"> Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
