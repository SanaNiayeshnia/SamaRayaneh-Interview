export default function Button({ children }) {
  return (
    <div className="bg-secondary-500 py-2 px-3 rounded-md text-white transition-all duration-300 hover:bg-secondary-600 hover:px-4 hover:rounded-none cursor-pointer">
      {children}
    </div>
  );
}
