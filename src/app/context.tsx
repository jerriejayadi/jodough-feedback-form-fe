"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface FormProps {
  page: number;
  formData: {
    customerId: string;
    name: string;
    phone: string;
    city: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
  };
}
interface ContextProps {
  state: FormProps;
  setState: Dispatch<SetStateAction<FormProps>>;
}

export const AppContext = createContext<ContextProps | any>({});
export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<FormProps>({
    page: 1,
    formData: {
      customerId: "",
      name: "",
      phone: "",
      city: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6: "",
    },
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
