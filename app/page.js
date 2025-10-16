import Image from "next/image";
import Button from "./_components/ui/Button";

export default function Home() {
  return (
    <div className="display grid  place-content-center h-screen ">
      <div className="flex items-center gap-5 flex-col border-3 border-primary-500 py-5 px-10 rounded-md ">
        <Image src="/images/icon.png" alt="logo" width="100" height="100" />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold">سما رایانه</h1>
          <p>به سما رایانه خوش آمدید</p>
          <Button>وارد شوید</Button>
        </div>
      </div>
    </div>
  );
}
