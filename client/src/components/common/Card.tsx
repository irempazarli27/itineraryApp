import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {title && (
        <h2 className="mb-5 text-lg font-semibold text-slate-900">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}

export default Card;