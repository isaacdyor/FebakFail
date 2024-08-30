"use client";

import { Button } from "@repo/ui/components/ui/button";
import { db } from "@repo/db/src/index";
import { users } from "@repo/db/src/schema";
import { env } from "@/env";

export default function Page() {
  console.log(env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  return (
    <div>
      {" "}
      <p>hello</p>
      <p>{env.NEXT_PUBLIC_SUPABASE_ANON_KEY}</p>
    </div>
  );
}
