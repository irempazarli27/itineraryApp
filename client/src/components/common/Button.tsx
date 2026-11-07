import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
    >
      {children}
    </button>
  );
}

export default Button;