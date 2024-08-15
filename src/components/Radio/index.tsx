import { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  checked?: boolean;
}

export default function Radio({ label, checked, id, ...props }: RadioProps) {
  return (
    <div className={`w-full`}>
      <input
        type="radio"
        id={id}
        checked={checked}
        {...props}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`button text-base flex gap-2 ${
          checked && "bg-white"
        } active:bg-white font-bold w-full cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
}
