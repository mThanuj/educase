"use client";
import CustomInputLabel from "@/components/auth/CustomInputLabel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signin } from "@/app/actions/auth.action";
import { toast } from "sonner";

const SigninPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = signin(credentials);
    if (user) {
      toast.success("User logged in successfully");
      router.push("/profile");
    } else {
      toast.error("Invalid credentials. Please signup / try again");
      router.push("/sign-up");
    }
  };

  return (
    <div className="px-5 py-10">
      <div className="text-start w-[60%] mb-6">
        <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
        <p className="text-gray-400 text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      <form onSubmit={handleLogin} className="w-full">
        <CustomInputLabel
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={credentials.email}
          onChange={setCredentials}
        />
        <CustomInputLabel
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={setCredentials}
        />
        <Button type="submit" variant={"custom-primary"} className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default SigninPage;
