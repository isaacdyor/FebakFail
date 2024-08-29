import { Button } from "@repo/ui/components/ui/button";
import { db } from "@repo/database/src/index";

export default function Page() {
  console.log(process.env.DATABASE_URL);
  return (
    <main>
      <Button variant="secondary">Click me</Button>
      <p>{process.env.DATABASE_URL} hi</p>
    </main>
  );
}
