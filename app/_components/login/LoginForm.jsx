"use client";
import { loginAction } from "@/app/_lib/actions";
import { useActionState, useEffect } from "react";
import Button from "../ui/Button";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    status: "idle",
  });
  const { setToast } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    //display a toast based on the form status
    if (state?.status === "rejected")
      setToast({
        text: "ورود با خطا مواجه شد!",
        severity: "error",
        open: true,
      });
    else if (state?.status === "succeeded") {
      setToast({
        text: "با موفقیت وارد شدید.",
        severity: "success",
        open: true,
      });
      router.replace("/dashboard");
    }
  }, [state]);

  return (
    <>
      <form className="flex flex-col items-center gap-2" action={formAction}>
        <h1 className="text-3xl font-bold">سما رایانه</h1>
        <p>به سما رایانه خوش آمدید</p>
        <Button type="submit" isPending={isPending} disabled={isPending}>
          وارد شوید
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
