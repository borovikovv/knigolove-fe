'use client';

import { useFormStatus  } from "react-dom";
import { Button } from "../button";

export default function UserDataFetch() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Fetching..." : "Get User"}
    </Button>
  );
}