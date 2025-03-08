"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/app/components/utitles/text";

export default function QrCodeSectionMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden flex flex-col bg-white rounded-lg m-4 p-3">
      {/* Header Section */}
      <div className="flex flex-row justify-between">
        <Text text="QR Code" color="black" weight="700" />
        <div className="flex flex-row gap-4 items-center">
          <Image src="/eye.svg" alt="eye" width={22} height={10} />
          <Image src="/send-square.svg" alt="send" width={22} height={10} />
          <Image
            src="/document-download.svg"
            alt="download"
            width={22}
            height={10}
          />
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }} // Rotates when toggled
              transition={{ duration: 0.3 }}
            >
              <Image
                src={isOpen ? "/up.svg" : "/down.svg"}
                alt="toggle"
                width={22}
                height={10}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* QR Code Info Box - Animate the visibility */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex justify-center mt-3.5 flex-col">
          <div className="flex flex-row gap-2 bg-[#FFF5E9] rounded-2xl w-full p-3">
            <Image
              src="/document-download-yollow.svg"
              alt="download-icon"
              width={22}
              height={10}
            />
            <Text
              text="Download the QR code or share it with your friends."
              color="#333333"
              weight="400"
              lineHeight="1"
            />
          </div>

          {/* QR Code Display */}
          <div className="rounded-2xl h-fit py-2.5 bg-gradient-to-r from-[#D20653] to-[#FF951D] flex items-center justify-center mt-3.5 w-full">
            <div className="rounded-2xl h-full mx-3 my-1.5 bg-white flex flex-col items-center w-full">
              <Image
                src="/bgLogo.svg"
                alt="logo"
                width={80}
                height={30}
                className="text-center mt-3.5"
              />

              <div className="mt-3">
                <Text
                  weight="700"
                  size="13px"
                  lineHeight="23px"
                  color="#333333"
                  text="Hala Ahmed"
                />
              </div>

              <Image
                src="/qr.svg"
                alt="QR Code"
                width={80}
                height={30}
                className="text-center mt-3"
              />

              <div className="mb">
                <Text
                  weight="400"
                  size="13px"
                  lineHeight="23px"
                  color="#333333"
                  text="Follow Us on Mazaady"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
