import Button from "./_components/ui/Button";

export const metadata = { title: "404" };

function NotFound() {
  return (
    <div className="grid h-screen place-items-center place-content-center space-y-2">
      <h2 className="text-9xl font-bold text-primary-500">404</h2>
      <p>صفحه مورد نظر پیدا نشد!</p>
      <Button href="/dashboard">بازگشت به داشبورد</Button>
    </div>
  );
}

export default NotFound;
