"use client";
import CustomInputLabel from "@/components/auth/CustomInputLabel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CustomRadioGroup from "@/components/auth/CustomRadioGroup";
import { useRouter } from "next/navigation";
import { signup } from "@/app/actions/auth.action";
import { toast } from "sonner";

const SignupPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<LoginFormType>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    signup(credentials);
    router.push("/profile");
    toast.success("User created successfully");
  };

  return (
    <div className="px-5 py-10 flex flex-col h-screen">
      <div className="text-start w-[60%] mb-6">
        <h1 className="text-2xl font-bold mb-2">Create your PopX account</h1>
        <p className="text-gray-400 text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      <form onSubmit={handleSignup} className="w-full relative flex-1">
        <CustomInputLabel
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={credentials.fullName!}
          onChange={setCredentials}
          required
        />
        <CustomInputLabel
          label="Phone Number"
          type="number"
          name="phone"
          placeholder="Enter phone number"
          value={credentials.phone!}
          onChange={setCredentials}
          required
        />
        <CustomInputLabel
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={credentials.email}
          onChange={setCredentials}
          required
        />
        <CustomInputLabel
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={setCredentials}
          required
        />
        <CustomInputLabel
          label="Company Name"
          type="text"
          name="company"
          placeholder="Enter company name"
          value={credentials.company!}
          onChange={setCredentials}
        />
        <CustomRadioGroup required />
        <Button
          type="submit"
          variant={"custom-primary"}
          className="w-full absolute bottom-0"
          size={"custom"}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
