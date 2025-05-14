"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section>
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ИСПОЛЬЗУЙ НАШЕ РЕШЕНИЕ
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">ЭКВИ PAY'S</h3>
            <p className="text-xl text-gray-500">
              x КОТОРОЕ ОБЪЕДИНЯЕТ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ, ЛИЧНЫЙ КАБИНЕТ И
              TELEGRAM-БОТ
            </p>
          </div>
        </AnimatedSection>

        {/* Phone Mockups */}
        <div className="relative flex sm:gap-2 min-[325px]:flex-col items-center sm:flex-row gap-10">
          {/* Center Phone (Largest) */}
          <div className="sm:order-3">
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <Image
                  src="/img/phones/MockupMid.png"
                  alt="ЭКВИ PAY'S Main App"
                  width={300}
                  height={500}
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Left Phone 1 */}
          <div className="sm:order-1">
            <AnimatedSection delay={0.1}>
              <Image
                src="/img/phones/MockupLeft2.png"
                alt="ЭКВИ PAY'S Telegram Bot"
                width={250}
                height={500}
                className="pt-5"
              />
            </AnimatedSection>
          </div>

          {/* Left Phone 2 */}
          <div className="sm:order-2">
            <AnimatedSection delay={0.15}>
              <Image
                src="/img/phones/MockupLeft1.png"
                alt="ЭКВИ PAY'S Balance"
                width={250}
                height={500}
              />
            </AnimatedSection>
          </div>

          {/* Right Phone 1 */}
          <div className="sm:order-4">
            <AnimatedSection delay={0.15}>
              <Image
                src="/img/phones/MockupRight1.png"
                alt="ЭКВИ PAY'S Features"
                width={250}
                height={500}
              />
            </AnimatedSection>
          </div>

          {/* Right Phone 2 */}
          <div className="sm:order-5">
            <AnimatedSection delay={0.1}>
              <Image
                src="/img/phones/MockupRight2.png"
                alt="ЭКВИ PAY'S Tasks"
                width={250}
                height={500}
                className="pt-5"
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Download/Access Buttons */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3 text-2xl font-bold">3</div>
                <div>
                  <div className="text-xs">Личный кабинет</div>
                  <div className="font-bold">ЭКВИ PAY'S</div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <Image
                    src="/img/GooglePlayIcon.png"
                    alt="Google Play"
                    width={30}
                    height={33}
                  />
                </div>
                <div>                 
                  <div className="text-xs">Скачать из</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <Image
                    src="/img/TelegramIcon.png"
                    alt="Telegram"
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <div className="text-xs">Использовать бота</div>
                  <div className="font-bold">Telegram</div>
                </div>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
