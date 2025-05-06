import { Link } from "react-router-dom";

export default function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-block px-4 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200"
    >
      {children}
    </Link>
  );
}