import React from "react";
import { FaUser } from "react-icons/fa";
const SignupButton = ({ theme }: { theme: string }) => {
  return (
    <div className="grid place-content-center py-1 px-2 my-4">
      <button
        className={`hidden md:block rounded-md bg-gradient-to-br from-blue-400 to-blue-700 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 px-4 py-2 ${
          theme === "light" ? "ring-offset-zinc-100" : "ring-offset-zinc-950"
        }`}
      >
        Sign up
      </button>
      <button className="md:hidden rounded-md  text-lg text-blue-500 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 px-1 py-0">
        <FaUser className="text-2xl" />
      </button>
    </div>
  );
};

export default SignupButton;

//   return (
//     <button className="rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70">
//       Sign up
//     </button>
//   );
// };
