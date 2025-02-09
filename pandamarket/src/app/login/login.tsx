import LoginForm from "@/components/Login/LoginForm";
import SimpleLogin from "@/components/Login/SimpleLogin";
import { JSX } from "react";

export default function Login(): JSX.Element {
  return (
    <div>
      <LoginForm />
      <SimpleLogin />
    </div>
  );
}
