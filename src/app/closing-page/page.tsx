"use client";

import { DONUT_IMAGE_LIST, DONUT_IMAGE_LIST_PROPS } from "@/utils/lib";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ClosingPage: React.FC = () => {
  const [selectedURL, setSelectedURL] = useState<DONUT_IMAGE_LIST_PROPS>();

  useEffect(() => {
    setSelectedURL(
      DONUT_IMAGE_LIST[Math.floor(Math.random() * DONUT_IMAGE_LIST.length - 1)]
    );
  }, []);
  return (
    <main
      className={`p-10 flex flex-col items-center justify-between min-h-screen`}
    >
      <motion.div
        initial={{ y: "50vw" }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 2 }}
        className={`font-skrapbook font-bold text-white text-2xl text-center`}
      >
        Kamu adalah tipe donat...
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 4, duration: 2 }}
      >
        <Image
          className={`size-64 object-cover`}
          alt={``}
          src={selectedURL?.url!}
          width={1080}
          height={1080}
        />{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 4, duration: 2 }}
      >
        <div
          className={`font-skrapbook font-black text-white text-center text-2xl`}
        >
          {selectedURL?.name ?? ""}
        </div>
        <div className={`mt-10`}>
          <button
            onClick={() => {
              window.open(`https://wa.me/+6281253195000`);
            }}
            className={`button flex items-center justify-center gap-2`}
          >
            <Image
              className={`size-8`}
              alt={``}
              src={`/icons/whatsapp.png`}
              width={1000}
              height={1000}
            />{" "}
            Claim Free Donut
          </button>
        </div>
      </motion.div>
    </main>
  );
};
export default ClosingPage;
