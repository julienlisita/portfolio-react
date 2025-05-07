import { Link } from "react-router-dom";

export default function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="
        inline-block 
        px-6 py-3 text-sm                        /*mobile*/
        sm:px-5 sm:py-2.5 sm:text-base           /*tablet*/
        lg:px-6 lg:py-3 lg:text-lg               /*screen*/
        font-semibold text-white 
        bg-[#007AFF] rounded-full 
        transition duration-200 transform 
        hover:scale-105 hover:bg-[#5AC8FA] 
        hover:shadow-[0_0_10px_2px_#5AC8FA,0_0_20px_5px_#007AFF] 
        hover:border-[#5AC8FA] 
        focus:outline-none focus:ring-2 
        focus:ring-[#5AC8FA] focus:ring-opacity-50"
      >
      {children}
    </Link>
  );
}