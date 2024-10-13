"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

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
  setState: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<ContextProps | any>({});
export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<string>("");

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
