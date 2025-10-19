import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link className="flex items-center justify-center gap-2" href="/dashboard">
      <Image src="/images/icon.png" alt="logo" width="40" height="40" />
      <h1 className="text-2xl font-bold">سما رایانه</h1>
    </Link>
  );
}

export default Logo;
