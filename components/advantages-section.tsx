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
              className="bg-[#2D2D2D80] grid grid-rows-2 rounded-lg overflow-hidden h-full"
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
              <div className="p-6">
                <p className="text-white text-sm text-base/7">
                  УЧАСТНИКИ ПОЛУЧАЮТ ДОХОД СРАЗУ ПОСЛЕ РЕГИСТРАЦИИ, благодаря
                  высокому спросу и бесплатному капиталу сразу после
                  регистрации.
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
              className="bg-[#2D2D2D80] grid grid-rows-2 rounded-lg overflow-hidden h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#2D2D2D] p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  ВЫСОКАЯ СТЕПЕНЬ ЗАЩИТЫ ВАШИХ ИНВЕСТИЦИЙ
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
              <div className="p-6">
                <p className="text-white text-sm text-base/7">
                  СИСТЕМА ЭКВИ ИСКЛЮЧАЕТ ВЕРОЯТНОСТЬ СНИЖЕНИЯ СТОИМОСТИ АКТИВОВ
                  ИЛИ ФИНАНСОВЫХ ПОТЕРЬ: ВАШИ ИНВЕСТИЦИИ ОБЕСПЕЧЕНЫ РЕАЛЬНОЙ
                  НЕДВИЖИМОСТЬЮ И ВНУТРЕННИМИ РЕСУРСАМИ ВРЕМЕНИ, КОТОРЫЕ
                  ПОЛНОСТЬЮ ОБЕСПЕЧЕНЫ ДЕНЕЖНЫМИ СРЕДСТВАМИ И СПРОСОМ
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
              className="bg-[#2D2D2D80] grid grid-rows-2 rounded-lg overflow-hidden h-full"
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
              <div className="p-6">
                <p className="text-white text-sm text-base/7">
                  СИСТЕМА РАЗРАБОТАНА СОГЛАСНО ДЕЙСТВУЮЩЕМУ ЗАКОНОДАТЕЛЬСТВУ ДЛЯ
                  ЗАЩИТЫ ИНТЕРЕСОВ УЧАСТНИКОВ
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
              className="bg-[#2D2D2D80] grid grid-rows-2 rounded-lg overflow-hidden h-full"
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
              <div className=" p-6">
                <p className="text-white text-sm  text-base/7">
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
              className="bg-[#2D2D2D80] grid grid-rows-2 rounded-lg overflow-hidden h-full"
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
              <div className="p-6">
                <p className="text-white text-sm text-base/7">
                  ЭКВИ ВЫКУПАЕТ ВРЕМЯ, КОТОРОЕ ИСПОЛЬЗУЕТСЯ ДЛЯ ПОКУПКИ
                  НЕДВИЖИМОСТИ И УРАВНИВАНИЯ БАЛАНСОВ: ЧАСТЬ ВРЕМЕНИ
                  ВОЗВРАЩАЕТСЯ В ПРОДАЖИ ПО БОЛЕЕ ВЫСОКОЙ ЦЕНЕ ДЛЯ СПРАВЕДЛИВОГО
                  РАСПРЕДЕЛЕНИЯ ДОХОДА МЕЖДУ УЧАСТНИКАМИ
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
              className="bg-[#2D2D2D80] grid grid-rows-2 rounded-lg overflow-hidden"
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
              <div className="p-6">
                <p className="text-white text-sm text-base/7">
                  НА РЫНКЕ НЕТ АНАЛОГОВ СИСТЕМЫ ЭКВИ. АВТОМАТИЧЕСКАЯ ЭМИССИЯ
                  ЧЕРЕЗ ТОРГИ: УПРАВЛЯЮЩАЯ КОМПАНИЯ ВЫКУПАЕТ ВРЕМЯ И
                  ВОЗОБНОВЛЯЕТ ЕГО В ПРОДАЖЕ ПО ПОВЫШЕННОЙ ЦЕНЕ, СОЗДАВАЯ
                  ЦЕННОСТЬ ЭКВИ И ДОПОЛНИТЕЛЬНЫЙ ДОХОД УЧАСТНИКАМ, СОХРАНЯЯ
                  ПОЛНОЕ ОБЕСПЕЧЕНИЕ И РАБОТАЯ ИСКЛЮЧИТЕЛЬНО НА БЛАГО УЧАСТНИКОВ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
