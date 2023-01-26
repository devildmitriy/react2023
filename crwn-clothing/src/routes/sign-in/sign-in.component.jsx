import SignUpForm from "../../components/sign-up/sign-up-form.component";
import Button from "../../components/button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in</h1>
      <Button onClick={logGoogleUser} buttonType="google">
        Sign in with Google Popup
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SingIn;
