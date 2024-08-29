import { Button } from "@repo/ui/components/ui/button";
import { db } from "@repo/db/src/index";
import { users } from "@repo/db/src/schema";

export default async function Page() {
  const allUsers = await db.select().from(users);
  console.log("All users:", allUsers);

  return (
    <main>
      <Button variant="secondary">Click me</Button>
      <p>{process.env.DATABASE_URL} hi</p>
    </main>
  );
}
