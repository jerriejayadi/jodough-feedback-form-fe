"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context";
import Page1 from "@/components/Pages/Page1";
import Page2 from "@/components/Pages/Page2";
import Page3 from "@/components/Pages/Page3";
import Page4 from "@/components/Pages/Page4";
import Page5 from "@/components/Pages/Page5";
import Page6 from "@/components/Pages/Page6";
import Page7 from "@/components/Pages/Page7";

const PAGES = [
  <Page1 key={0} />,
  <Page2 key={1} />,
  <Page3 key={2} />,
  <Page4 key={3} />,
  <Page5 key={4} />,
  <Page6 key={5} />,
  <Page7 key={6} />,
];

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (state.page === 1) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-9">
        <Image
          className={`w-40`}
          alt=""
          src={`/logo-white.png`}
          width={1079}
          height={1274}
        />
        <p className={`mt-11 font-sixhands text-white text-center`}>
          Terima kasih atas kunjungan kakak Bolehkah Minnat minta bantuannya
          untuk isii....
        </p>
        <div className={`relative flex gap-2 mt-10`}>
          <Image
            className={`object-contain`}
            alt={``}
            src={`/icons/arrow-down-1.png`}
            width={22}
            height={54}
          />
          <Image
            className={`object-contain`}
            alt={``}
            src={`/icons/arrow-down-2.png`}
            width={29}
            height={39}
          />
        </div>
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center mt-10`}
        >
          Customer Feedback Form
        </p>

        <button
          onClick={() => {
            setState({ ...state, page: state.page + 1 });
          }}
          className={`button mt-5`}
        >
          Klik Di Sini
        </button>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between px-9 py-24">
        <p
          className={`font-skrapbook text-2xl font-bold text-white text-center mt-10`}
        >
          Customer Feedback Form
        </p>
        {PAGES[state.page - 2]}
        {state.page === 2 && (
          <button
            onClick={() => {
              setState({ ...state, page: state.page + 1 });
            }}
            className={`button mt-5`}
          >
            Selanjutnya
          </button>
        )}
      </main>
    );
  }
}
