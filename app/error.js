"use client";

import Button from "./_components/ui/Button";

function ErrorBoundary({ error, reset }) {
  return (
    <div className="grid h-screen place-items-center place-content-center space-y-2">
      <h2 className="text-3xl font-semibold text-primary-500">
        به نظر می‌رسد مشکلی رخ داده است!
      </h2>
      <p className="max-w-10/12">(خطای مربوطه: {error.message})</p>
      <div className="flex items-center gap-2">
        <Button onClick={reset}>دوباره تلاش کنید</Button>
        <Button href="/dashboard">بازگشت به داشبورد</Button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
