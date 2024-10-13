"use client";
import { useContext, useState } from "react";
import Radio from "../Radio";
import { getFormData } from "@/utils/convertJSONToFormData";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import moment from "moment";
import { DONUT_IMAGE_LIST } from "@/utils/lib";
import { AppContext } from "@/app/context";

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
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[][]>(
    steps.map((step) => Array(step.questions.length).fill(""))
  );
  const { state, setState } = useContext(AppContext);

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
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const claimedDonut =
      DONUT_IMAGE_LIST[
        Math.floor(Math.random() * (DONUT_IMAGE_LIST.length - 1))
      ];
    setState(claimedDonut);
    let submittedData = {
      date: moment(new Date()).format("YYYY-MM-DD"),
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
      donut: claimedDonut.name,
    };
    let payload = getFormData(submittedData);
    console.log("Answers Submitted:", submittedData);
    fetch(
      "https://script.google.com/macros/s/AKfycbypVZZgA5hnuXapwWdMGTIcapD8iNoftxfUHzwEa8HwaaYjQ2vCx8AhHPE_GTv1LLqw/exec",
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
        setLoading(false);
        router.push(`/closing-page`);
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {steps[currentStep].title && (
        <h2 className="text-2xl font-bold mb-4 font-skrapbook text-center">
          {steps[currentStep].title}
        </h2>
      )}
      {steps[currentStep].questions.map((question, index) => (
        <motion.div
          key={`${currentStep}-${index}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <div className="mb-4">
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
        </motion.div>
      ))}
      <div className="mt-4 flex justify-between">
        {currentStep === 0 && (
          <button
            onClick={() => {
              nextStep();
            }}
            disabled={
              answers[0][0] === "" ||
              answers[0][1] === "" ||
              answers[0][2] === ""
            }
            className={`button mt-5 text-[#DCC9B8] bg-[#B38E6C]  font-semibold active:bg-white disabled:bg-gray-600 disabled:text-gray-400`}
          >
            Selanjutnya
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button
            disabled={
              loading ||
              answers.some((rows) => rows.some((rows2) => rows2 === ""))
            }
            onClick={() => {
              handleSubmit();
            }}
            className={`button text-[#DCC9B8] bg-[#B38E6C]  text-xl font-bold  active:bg-white disabled:bg-gray-400 disabled:text-gray-500`}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StepForm;
