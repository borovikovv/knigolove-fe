import { SubmitSignupForm } from "../components/form/signup-form";

const initialState = {
  message: '',
  email: '',
  password: '',
}
 
export default async function Page() {
  return (
    <div className="flex flex-col w-full gap-2 items-center justify-center mt-40">
      <h1 className="font-semibold pb-2">Create account</h1>
      <SubmitSignupForm />
    </div>
  );
}