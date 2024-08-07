import { AppContext } from "@/app/context";
import Radio from "@/components/Radio";
import { useContext } from "react";

export default function Page6() {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center`}
        >
          Gimana nih cita rasa dari makanannya?
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
                formData: { ...prev.formData, answer5: e.target.value },
              }));
            }}
            label={
              <>
                <p>A.</p>
                <p>Enaak Banget Minnat</p>
              </>
            }
            checked={state.formData.answer5 === "A"}
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
                formData: { ...prev.formData, answer5: e.target.value },
              }));
            }}
            label={
              <>
                <p>B.</p>
                <p>Enak Kok</p>
              </>
            }
            checked={state.formData.answer5 === "B"}
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
                formData: { ...prev.formData, answer5: e.target.value },
              }));
            }}
            label={
              <>
                <p>C.</p>
                <p>Kurang Nikmat ... :&#40;</p>
              </>
            }
            checked={state.formData.answer5 === "C"}
          />
        </div>
      </div>
      <div></div>
    </>
  );
}
