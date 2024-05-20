"use client";

import { z } from "zod";
import { useFormState, useFormStatus } from 'react-dom'
import { signupAction } from '@/lib/actions';
import { Input } from "../input";
import { Button } from "../../button";

const initialState = {
  message: '',
  email: '',
  password: '',
}
 
export function SubmitSignupForm() {
  const [state, formAction] = useFormState(signupAction, initialState);
  const { pending } = useFormStatus()

  return (
    <div className='flex flex-col w-full gap-2 items-center justify-center'> 
      <form
        className="flex flex-col w-fit gap-2"
        action={formAction}
      >
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Input type="first_name" name="first_name" placeholder="First name" required />
        <Input type="last_name" name="last_name" placeholder="Last name" required />
        {state.message && <p>{state?.message}</p>}
        <Button styleType='access' className="w-full" disabled={pending}>
          Create account
        </Button>
      </form>
    </div>
  );
}