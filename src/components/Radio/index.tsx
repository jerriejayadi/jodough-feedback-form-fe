import { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  checked?: boolean;
}

export default function Radio({ label, checked, ...props }: RadioProps) {
  return (
    <div>
      <input hidden {...props} placeholder={`Isi Nama Kamu`} />
      <label
        htmlFor={props.id}
        className={`button text-xl flex gap-2 ${
          checked && "bg-white"
        } font-bold`}
      >
        {label}
      </label>
    </div>
  );
}
