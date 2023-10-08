import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/auth/RegisterForm";

async function RegisterPage() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/core");
  }
  return <RegisterForm />;
}

export default RegisterPage;
