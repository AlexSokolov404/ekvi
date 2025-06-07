"use client";

import Image from "next/image";
import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";

export default function AdvantagesSection() {
  return (
    <section>
      {/* Decorative elements */}
      <div className="relative  w-full h-full">
        <Image
          src="/svg/background2.svg"
          alt="Decorative waves"
          width={570}
          height={600}
          className="absolute right-0 -top-60 max-[1220px]:-top-40"
        />
      </div>

      <div className="container relative mx-auto px-4 max-w-[1440px] z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-6">
          {/* Card 1 */}
          <AnimatedSection
            delay={0.1}
            className="md:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
          >
            <motion.div
              className="bg-gray-200 grid grid-rows-2 rounded-lg overflow-hidden h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#2D2D2D] w-50 p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  ГАРАНТИРОВАННЫЙ ДОХОД
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/svg/wallet.svg"
                    alt="Wallet Icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                  Участники получают ДОХОД СРАЗУ, благодаря высокому спросу и
                  бесплатному капиталу сразу после начала использования системы.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection
            delay={0.2}
            className="md:col-span-1 lg:col-span-2 xl:col-span-4 2xl:col-span-4"
          >
            <motion.div
              className="bg-gray-200 grid grid-rows-2 rounded-lg overflow-hidden h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#2D2D2D] p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  ЗАЩИТА ВАШИХ ИНВЕСТИЦИЙ
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/svg/security.svg"
                    alt="Protection Icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                  Валюта учета ЭКВИ исключает вероятность снижения стоимости
                  активов или финансовых потерь: ваши инвестиции обеспечены
                  реальной недвижимостью и внутренними ресурсами времени
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection
            delay={0.3}
            className="md:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
          >
            <motion.div
              className="bg-gray-200 grid grid-rows-2 rounded-lg overflow-hidden h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#2D2D2D] p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  ПОЛНОЕ СООТВЕТСТВИЕ ЗАКОНОДАТЕЛЬСТВУ РФ
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/svg/document.svg"
                    alt="Document Icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                  Система разрабона согласно действующему законодательству для
                  защиты интересов участников
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 4 */}
          <AnimatedSection
            delay={0.4}
            className="md:col-span-1 lg:col-span-2 xl:col-span-4 2xl:col-span-4"
          >
            <motion.div
              className="bg-gray-200 grid grid-rows-2 rounded-lg overflow-hidden h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#2D2D2D] p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  ДВОЙНОЙ НАМИНАЛ
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/svg/phone.svg"
                    alt="Double Nominal Icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                  - ЭК (Эксклюзивный Кондоминиум): Минимальная доля доходной
                  недвижимости. <br /> - ВИ (Время Использования): Активная
                  часть валюты, которая учитывает время использования
                  недвижимости.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 5 */}
          <AnimatedSection
            delay={0.5}
            className="md:col-span-1 lg:col-span-2 xl:col-span-4 2xl:col-span-4"
          >
            <motion.div
              className="bg-gray-200 grid grid-rows-2 rounded-lg overflow-hidden h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 bg-[#2D2D2D]">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  ЦЕПОЧКА СОЗДАНИЯ ЦЕННОСТИ
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/svg/cpu.svg"
                    alt="Value Chain Icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                  ЭКВИ выкупает время, которое используется для покупки
                  недвижимости и уравнивания балансов: часть времени
                  возвращается в продажи по более высокой цене для справедливого
                  распределения дохода между участниками
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 6 */}
          <AnimatedSection
            delay={0.6}
            className="md:col-span-1 lg:col-span-2 xl:col-start-2 xl:col-end-8"
          >
            <motion.div
              className="bg-gray-200 grid grid-rows-2 rounded-lg overflow-hidden"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#2D2D2D] p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  ОТСУТСТВИЕ АНАЛОГОВ НА РЫНКЕ
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/svg/heart.svg"
                    alt="No Analogues Icon"
                    width={100}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                  На рынке нет аналогов системы ЭКВИ`C. Автоматическая эмиссия
                  через торги: управляющая компания выкупает время и выставляет
                  его на продажу по повышенной цене, создавая ценность ЭКВИ и
                  дополнительный доход участникам, сохраняя полное обеспечение и
                  работая исключительно на благо участников
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
