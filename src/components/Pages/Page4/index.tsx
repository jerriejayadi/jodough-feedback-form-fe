import { AppContext } from "@/app/context";
import Radio from "@/components/Radio";
import { useContext } from "react";

export default function Page4() {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center`}
        >
          Tau Jodough Darimana?
        </p>
        <div className={`flex flex-col gap-5 mt-14`}>
          <Radio
            hidden
            id={`instagram`}
            type={`radio`}
            name={`answer1`}
            value={`A`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer3: e.target.value },
              }));
            }}
            label={
              <>
                <p>Instagram @Jodough.93</p>
              </>
            }
            checked={state.formData.answer3 === "A"}
          />
          <Radio
            hidden
            id={`tiktok`}
            type={`radio`}
            name={`answer1`}
            value={`B`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer3: e.target.value },
              }));
            }}
            label={
              <>
                <p>Tiktok @behind.jodough</p>
              </>
            }
            checked={state.formData.answer3 === "B"}
          />
          <Radio
            hidden
            id={`igads`}
            type={`radio`}
            name={`answer1`}
            value={`C`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer3: e.target.value },
              }));
            }}
            label={
              <>
                <p>Instagram Ads</p>
              </>
            }
            checked={state.formData.answer3 === "C"}
          />
          <Radio
            hidden
            id={`online`}
            type={`radio`}
            name={`answer1`}
            value={`D`}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                page: prev.page + 1,
                formData: { ...prev.formData, answer3: e.target.value },
              }));
            }}
            label={
              <>
                <p>Media Online &#40;Brosur,Banner&#41;</p>
              </>
            }
            checked={state.formData.answer3 === "D"}
          />
        </div>
      </div>
      <div></div>
    </>
  );
}
