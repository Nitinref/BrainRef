import { ReactElement } from "react";

interface Buttonprop {
  variant: "primary" | "secondary";
  text: string;
  size?: "lg" | "sm" | "md";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
}

const ButtonSize = {
  lg: "py-4 px-8 bg-red-300",
  sm: "py-2 px-4 bg-blue-300",
  md: "py-4 px-6 bg-green-300",
};

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center ";

export function Button({
  variant,
  text,
  startIcon,
  endIcon,
  onClick,
  fullWidth = false,
  size = "md",
}: Buttonprop) {
  return (
    <button
      onClick={onClick}
      className={
        variantClasses[variant] +
        " " +
        defaultStyles +
        " " +
        ButtonSize[size] +
        (fullWidth ? " w-full justify-center" : "")
      }
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {text}
      {endIcon && <div className="pl-2">{endIcon}</div>}
    </button>
  );
}
