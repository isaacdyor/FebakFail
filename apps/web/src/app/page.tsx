"use client";

import { env } from "@/env";

export default function Page() {
  console.log(env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  return (
    <div>
      <p>hello</p>
      <p>{env.NEXT_PUBLIC_SUPABASE_ANON_KEY}</p>
    </div>
  );
}
