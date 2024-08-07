import { AppContext } from "@/app/context";
import { useContext } from "react";

export default function Page1() {
  const { state, setState } = useContext(AppContext);
  return (
    <div>
      <p className={`font-skrapbook text-2xl font-bold text-white text-center`}>
        BOLEH BANTU ISI DATA DIRI KAKAK?
      </p>
      <div className={`flex flex-col gap-5 mt-14`}>
        <input
          onChange={(e) => {
            setState((prev: any) => ({
              ...prev,
              formData: { ...prev.formData, name: e.target.value },
            }));
          }}
          placeholder={`Isi Nama Kamu`}
          className={`button placeholder:text-[#B38E6C] text-xl`}
        />
        <input
          onChange={(e) => {
            setState((prev: any) => ({
              ...prev,
              formData: { ...prev.formData, phone: e.target.value },
            }));
          }}
          placeholder={`Nomor HP`}
          className={`button placeholder:text-[#B38E6C] text-xl`}
        />
        <input
          onChange={(e) => {
            setState((prev: any) => ({
              ...prev,
              formData: { ...prev.formData, city: e.target.value },
            }));
          }}
          placeholder={`Asal Kota`}
          className={`button placeholder:text-[#B38E6C] text-xl`}
        />
      </div>
    </div>
  );
}
