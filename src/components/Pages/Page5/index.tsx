import { AppContext } from "@/app/context";
import Radio from "@/components/Radio";
import { useContext } from "react";

export default function Page5() {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center`}
        >
          Gimana tampilan makanannya?
        </p>
        <div className={`flex flex-col gap-5 mt-14`}>
          <Radio
            hidden
            id={`answer_a`}
            type={`radio`}
            name={`answer1`}
            value={`A`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer4: e.target.value },
              }));
            }}
            label={
              <>
                <p>A.</p>
                <p>Bagus, Sangat menarikk!!</p>
              </>
            }
            checked={state.formData.answer4 === "A"}
          />
          <Radio
            hidden
            id={`answer_b`}
            type={`radio`}
            name={`answer1`}
            value={`B`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer4: e.target.value },
              }));
            }}
            label={
              <>
                <p>B.</p>
                <p>Cukup Bagus</p>
              </>
            }
            checked={state.formData.answer4 === "B"}
          />
          <Radio
            hidden
            id={`answer_c`}
            type={`radio`}
            name={`answer1`}
            value={`C`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer4: e.target.value },
              }));
            }}
            label={
              <>
                <p>C.</p>
                <p>Biasa aja</p>
              </>
            }
            checked={state.formData.answer4 === "C"}
          />
        </div>
      </div>
      <div></div>
    </>
  );
}
