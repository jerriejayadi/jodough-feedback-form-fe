"use client";
import { useState } from "react";
import Radio from "../Radio";
import { getFormData } from "@/utils/convertJSONToFormData";
import { v4 as uuidv4 } from "uuid";

type Question = {
  question: string;
  inputType: string;
  options?: string[];
};

type Step = {
  title?: string;
  questions: Question[];
};

const StepForm: React.FC<{ steps: Step[] }> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>(
    steps.map((step) => Array(step.questions.length).fill(""))
  );

  const handleChange = (
    questionIndex: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newAnswers = [...answers];
    newAnswers[currentStep][questionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    let submittedData = {
      customerId: uuidv4(),
      name: answers[0][0],
      phone: answers[0][1],
      city: answers[0][2],
      answer1: answers[1][0],
      answer2: answers[2][0],
      answer3: answers[3][0],
      answer4: answers[4][0],
      answer5: answers[5][0],
      answer6: answers[6][0],
      answer7: answers[7][0],
      answer8: answers[8][0],
      answer9: answers[9][0],
      answer10: answers[10][0],
      answer11: answers[11][0],
      answer12: answers[12][0],
      answer13: answers[13][0],
      answer14: answers[14][0],
      answer15: answers[15][0],
      answer16: answers[16][0],
      answer17: answers[17][0],
      answer18: answers[18][0],
      answer19: answers[19][0],
      answer20: answers[20][0],
      answer21: answers[21][0],
    };
    let payload = getFormData(submittedData);
    console.log("Answers Submitted:", submittedData);
    fetch(
      "https://script.google.com/macros/s/AKfycby364cJ_9L4W7OYJbhmqHim5p5Jf6SlaglTBOYPe00zhrkHcaYObg9ysWSxgKZ3jDTL/exec",
      {
        mode: "no-cors",
        method: "POST",
        body: payload,
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
    <div className="max-w-lg mx-auto p-4">
      {steps[currentStep].title && (
        <h2 className="text-2xl font-bold mb-4 font-skrapbook text-center">
          {steps[currentStep].title}
        </h2>
      )}
      {steps[currentStep].questions.map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">
            {question.inputType === "select" && (
              <div className={`font-skrapbook text-center text-2xl`}>
                {question.question}
              </div>
            )}
            {question.inputType === "text" && (
              <input
                type="text"
                value={answers[currentStep][index]}
                onChange={(e) => handleChange(index, e)}
                placeholder={question.question}
                className="button placeholder:text-[#B38E6C] text-xl"
              />
            )}
            {question.inputType === "select" && (
              <div className="mt-4">
                {question.options?.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center mb-2 font-sixhands text-black text-base"
                  >
                    <Radio
                      type="radio"
                      id={`question-${index}-option-${optionIndex}`}
                      name={`question-${index}`}
                      value={option}
                      checked={answers[currentStep][index] === option}
                      onChange={(e) => {
                        handleChange(index, e);
                        nextStep();
                      }}
                      className="mr-2 w-full"
                      label={option}
                    />
                  </div>
                ))}
              </div>
            )}
          </label>
        </div>
      ))}
      <div className="mt-4 flex justify-between">
        {currentStep === 0 && (
          <button
            onClick={() => {
              nextStep();
            }}
            className={`button mt-5 text-black font-semibold`}
          >
            Selanjutnya
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button
            onClick={() => {
              handleSubmit();
            }}
            className={`button text-xl font-bold text-black`}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StepForm;
