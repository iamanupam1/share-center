import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import LoginForm from "@/components/auth/LoginForm";
import { redirect } from "next/navigation";
async function LoginPage() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/core");
  }
  return <LoginForm />;
}

export default LoginPage;
