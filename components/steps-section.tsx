"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";

export default function StepsSection() {
  return (
    <section>
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <h2 className="text-4xl min-[1220px]:text-5xl font-bold mb-16 text-center">
            ЧЕТЫРЕ ШАГА ДЛЯ ДОСТИЖЕНИЯ УСПЕХА
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-baseline max-w-6xl mx-auto mb-16">
          {/* Step 1 - 25% */}
          <AnimatedSection delay={0.1} className="mb-8 md:mb-0">
            <motion.div
              className="flex flex-col items-center gap-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/svg/step1.svg"
                  alt="ЭКВИ Coin"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-xs lg:text-base font-medium min-w-[220px]">
                ЗАРЕГИСТРИРУЙТЕСЬ
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Connector */}
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>

          {/* Step 2 - 50% */}
          <AnimatedSection delay={0.2} className="mb-8 md:mb-0">
            <motion.div
              className="flex flex-col items-center gap-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/svg/step2.svg"
                  alt="ЭКВИ Coin"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-xs lg:text-base font-medium max-w-[220px]">
                ПОЛУЧИТЕ СТАРТОВЫЙ КАПИТАЛ В ПОДАРОК
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Connector */}
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>

          {/* Step 3 - 75% */}
          <AnimatedSection delay={0.3} className="mb-8 md:mb-0">
            <motion.div
              className="flex flex-col items-center gap-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/svg/step3.svg"
                  alt="ЭКВИ Coin"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-xs lg:text-base font-medium max-w-[220px]">
                ПРИОБРЕТАЙТЕ БОЛЬШЕ ЭКВИ ИЛИ ЗАРАБАТЫВАЙТЕ НА СВОИХ АКТИВАХ
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Connector */}
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>

          {/* Step 4 - 100% */}
          <AnimatedSection delay={0.4}>
            <motion.div
              className="flex flex-col items-center gap-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/svg/step4.svg"
                  alt="ЭКВИ Coin"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-xs lg:text-base font-medium max-w-[220px]">
                ПРОДАВАЙТЕ ЭКВИ В ЛЮБОЙ РАБОЧИЙ ДЕНЬ
              </p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Registration Banner */}
        <AnimatedSection delay={0.5}>
          <div
            className="bg-green-500 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="text-white text-xs lg:text-base font-medium mb-4 md:mb-0 text-center md:text-left">
              <p>ЗАРЕГИСТРИРУЙТЕСЬ ЗА 2 МИНУТЫ –</p>
              <p>ПРОСТО ПЕРЕЙДИТЕ В ПРИЛОЖЕНИЕ</p>
            </div>

            <div className="mb-4 md:mb-0">
              <Image
                src="/img/cherylogo.png"
                alt="ЭКВИ Coin"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>

            <Link
              href="https://t.me/icbprof_bot?start=001"
              className="bg-yellow-400 hover:bg-yellow-500 text-xs lg:text-base text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              ПЕРЕЙТИ К ПРИЛОЖЕНИЮ
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
