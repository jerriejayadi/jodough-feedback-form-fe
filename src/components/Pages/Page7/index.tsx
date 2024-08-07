import { AppContext } from "@/app/context";
import Radio from "@/components/Radio";
import { randomUUID } from "crypto";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFormData } from "@/utils/convertJSONToFormData";

export default function Page7() {
  const { state, setState } = useContext(AppContext);
  const handleSubmit = () => {
    let payload = { ...state.formData, customerId: uuidv4() };
    let payloadFormData = getFormData(payload);
    console.log(payloadFormData);
    fetch(
      "https://script.google.com/macros/s/AKfycby364cJ_9L4W7OYJbhmqHim5p5Jf6SlaglTBOYPe00zhrkHcaYObg9ysWSxgKZ3jDTL/exec",
      {
        mode: "no-cors",
        method: "POST",
        body: payloadFormData,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true",
          "Upgrade-Insecure-Requests": "1",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center`}
        >
          Boleh Minnat minta kritik saran untuk Jodough semakin lebih baik??
        </p>
        <div className={`flex flex-col gap-5 mt-14`}>
          <textarea
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                formData: { ...prev.formData, answer6: e.target.value },
              }));
            }}
            placeholder={`Tuliskan Di sini`}
            className={`button h-56 !rounded-[25px] font-bold text-xl px-6 py-4 placeholder:text-[#B38E6C] `}
          />
        </div>
      </div>

      <button
        onClick={() => {
          handleSubmit();
        }}
        className={`button text-xl font-bold`}
      >
        Submit
      </button>
    </>
  );
}
