import { AppContext } from "@/app/context";
import Radio from "@/components/Radio";
import { useContext } from "react";

export default function Page3() {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center`}
        >
          Gimana Nih Kualitas Makanan dan Minumannya?
        </p>
        <div className={`flex flex-col gap-5 mt-14`}>
          <Radio
            hidden
            id={`terbaik`}
            type={`radio`}
            name={`answer1`}
            value={`A`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer2: e.target.value },
              }));
            }}
            label={
              <>
                <p>A.</p>
                <p>Kualitas Terbaik!!!</p>
              </>
            }
            checked={state.formData.answer2 === "A"}
          />
          <Radio
            hidden
            id={`okey`}
            type={`radio`}
            name={`answer1`}
            value={`B`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer2: e.target.value },
              }));
            }}
            label={
              <>
                <p>B.</p>
                <p>Kualitas Oke kok</p>
              </>
            }
            checked={state.formData.answer2 === "B"}
          />
          <Radio
            hidden
            id={`kurang`}
            type={`radio`}
            name={`answer1`}
            value={`C`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer2: e.target.value },
              }));
            }}
            label={
              <>
                <p>C.</p>
                <p>Agak kurang sih... :&#40;</p>
              </>
            }
            checked={state.formData.answer2 === "C"}
          />
        </div>
      </div>
      <div></div>
    </>
  );
}
