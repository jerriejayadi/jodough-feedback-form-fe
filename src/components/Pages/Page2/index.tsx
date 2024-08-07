import { AppContext } from "@/app/context";
import { useContext } from "react";

export default function Page2() {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center`}
        >
          PERNAH KE JODOUGH SEBELUMNYA?
        </p>
        <div className={`flex flex-col gap-5 mt-14`}>
          <input
            hidden
            id={`sudah`}
            type={`radio`}
            name={`answer1`}
            value={`A`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer1: e.target.value },
              }));
            }}
            placeholder={`Isi Nama Kamu`}
            className={`button placeholder:text-[#B38E6C] text-xl`}
          />
          <label
            htmlFor={`sudah`}
            className={`button text-xl flex gap-2 ${
              state.formData.answer1 === "A" && "bg-white"
            } font-bold`}
          >
            <p>A.</p>
            <p>Sudah Pernah Dong</p>
          </label>
          <input
            hidden
            id={`belum`}
            type={`radio`}
            name={`answer1`}
            value={`B`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer1: e.target.value },
              }));
            }}
            placeholder={`Isi Nama Kamu`}
            className={`button placeholder:text-[#B38E6C] text-xl`}
          />
          <label
            htmlFor={`belum`}
            className={`button text-xl flex gap-2 ${
              state.formData.answer1 === "B" && "bg-white"
            } font-bold`}
          >
            <p>B.</p>
            <p>Belum Pernah Nihh</p>
          </label>
        </div>
      </div>
      <div></div>
    </>
  );
}
