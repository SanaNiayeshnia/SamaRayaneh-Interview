import Image from "next/image";
import LoginForm from "./_components/login/LoginForm";

export default async function Home() {
  return (
    <div className="display grid  place-content-center h-screen ">
      <div className="flex items-center gap-5 flex-col border-3 border-primary-500 py-5 px-10 rounded-md ">
        <Image src="/images/icon.png" alt="logo" width="100" height="100" />
        <LoginForm />
      </div>
    </div>
  );
}
