import Image from "next/image";
import LoginForm from "./_components/login/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  //redirect the user to the dashboard if they are authenticated
  const isUserAuthenticated = (await cookies())?.get("accessToken")?.value;
  if (isUserAuthenticated) redirect("/dashboard");

  return (
    <div className="display grid  place-content-center h-screen ">
      <div className="flex items-center gap-5 flex-col border-3 border-primary-500 py-5 px-10 rounded-md ">
        <Image src="/images/icon.png" alt="logo" width="100" height="100" />
        <LoginForm />
      </div>
    </div>
  );
}
