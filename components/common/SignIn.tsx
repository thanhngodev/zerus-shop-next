import { SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <SignInButton>
      <button className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
