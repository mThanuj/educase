import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="absolute bottom-0 w-full p-4">
        <div className="text-start w-3/4 mb-6">
          <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
          <p className="text-gray-400 text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant={"custom-primary"} size={"custom"} asChild>
            <Link href="/sign-up">Create Account</Link>
          </Button>
          <Button variant={"custom-secondary"} size={"custom"} asChild>
            <Link href="/sign-in">Already Registered? Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
