'use client';

import { useFormState, useFormStatus } from 'react-dom'
import { loginAction } from '@/lib/actions';

const initialState = {
  message: '',
  email: '',
  password: '',
}
 
export default function Page() {
  const [state, formAction] = useFormState(loginAction, initialState);
  const { pending } = useFormStatus()

  return (
    <form
      className="flex flex-col items-center justify-center"
      action={formAction}
    >
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      {state.message && <p>{state?.message}</p>}
      <button className="btn" aria-disabled={pending}>
        Login
      </button>
    </form>
  );
}