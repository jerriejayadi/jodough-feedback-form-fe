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
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-9">
      <motion.div
        initial={{ y: 100 }}
        animate={{
          y: [100, 70, 100, 70, 100, 0],
          transition: { duration: 2 },
        }}
      >
        <Image
          className={`w-40`}
          alt=""
          src={`/logo-white.png`}
          width={1079}
          height={1274}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 2, duration: 1.5 }}
        className={`mt-4 font-sixhands text-white text-center`}
      >
        Terima kasih atas kunjungan kakak Bolehkah Minnat minta bantuannya untuk
        isii....
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 2, duration: 1.5 }}
        className={`relative flex gap-2 mt-4`}
      >
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
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 2, duration: 1.5 }}
        className={`font-skrapbook text-2xl font-bold text-white text-center mt-4`}
      >
        Customer Feedback Form
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 2, duration: 1.5 }}
        onClick={() => {
          router.push(`/questionnaire`);
        }}
        className={`button mt-4`}
      >
        Klik Di Sini
      </motion.button>
    </main>
  );
}
