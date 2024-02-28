'use client';

import { useFormState, useFormStatus } from 'react-dom'
import { loginAction } from '@/lib/actions';
import { Input } from '../components/form/input';
import { Button } from '../components/button';

const initialState = {
  message: '',
  email: '',
  password: '',
}
 
export default function Page() {
  const [state, formAction] = useFormState(loginAction, initialState);
  const { pending } = useFormStatus()

  return (
    <div className='flex flex-col w-full gap-2 items-center justify-center mt-40'> 
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
        {state.message && <p>{state?.message}</p>}
        <Button className="w-full" aria-disabled={pending}>
          Login
        </Button>
      </form>
    </div>
  );
}