"use client"

import Image from "next/image"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

export default function AdvantagesSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0">
        <div className="w-40 h-40 rounded-full bg-yellow-400"></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="w-32 h-32 rounded-full bg-green-500"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">ГАРАНТИРОВАННЫЙ ДОХОД</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Guaranteed Income Icon"
                    width={60}
                    height={60}
                    className="bg-yellow-400 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="bg-gray-700 p-6">
                <p className="text-white text-sm">
                  УЧАСТНИКИ ПОЛУЧАЮТ ДОХОД СРАЗУ ПОСЛЕ РЕГИСТРАЦИИ: СПРОС ПРЕВЫШАЕТ ПРЕДЛОЖЕНИЕ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection delay={0.2}>
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">ВЫСОКАЯ СТЕПЕНЬ ЗАЩИТЫ ВАШИХ ИНВЕСТИЦИЙ</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Investment Protection Icon"
                    width={60}
                    height={60}
                    className="bg-green-500 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="bg-gray-700 p-6">
                <p className="text-white text-sm">
                  СИСТЕМА ЭКВИ ИСКЛЮЧАЕТ ВЕРОЯТНОСТЬ СНИЖЕНИЯ СТОИМОСТИ АКТИВОВ ИЛИ ФИНАНСОВЫХ ПОТЕРЬ: ВАШИ ИНВЕСТИЦИИ
                  ОБЕСПЕЧЕНЫ РЕАЛЬНОЙ НЕДВИЖИМОСТЬЮ И ВНУТРЕННИМИ РЕСУРСАМИ ВРЕМЕНИ, КОТОРЫЕ ПОЛНОСТЬЮ ОБЕСПЕЧЕНЫ
                  ДЕНЕЖНЫМИ СРЕДСТВАМИ И СПРОСОМ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection delay={0.3}>
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">ПОЛНОЕ СООТВЕТСТВИЕ ЗАКОНОДАТЕЛЬСТВУ РФ</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Legal Compliance Icon"
                    width={60}
                    height={60}
                    className="bg-yellow-400 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="bg-gray-700 p-6">
                <p className="text-white text-sm">
                  СИСТЕМА РАЗРАБОТАНА СОГЛАСНО ДЕЙСТВУЮЩЕМУ ЗАКОНОДАТЕЛЬСТВУ ДЛЯ ЗАЩИТЫ ИНТЕРЕСОВ УЧАСТНИКОВ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 4 */}
          <AnimatedSection delay={0.4} className="md:col-span-1 lg:col-span-2">
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">ДВОЙНОЙ НАМИНАЛ</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Double Nominal Icon"
                    width={60}
                    height={60}
                    className="bg-green-400 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="bg-gray-700 p-6">
                <p className="text-white text-sm">
                  1) МЕТРЫ: РЕАЛЬНЫЕ АКТИВЫ КООПЕРАТИВА В ВИДЕ ДОХОДНОЙ НЕДВИЖИМОСТИ
                  <br />
                  2) ВРЕМЯ ПОЛЬЗОВАНИЯ НЕДВИЖИМОСТЬЮ: НАЧИСЛЯЕТСЯ ДЕРЖАТЕЛЯМ МЕТРОВ И ИМЕЕТ ЭКВИВАЛЕНТ В ВИДЕ ДЕНЕЖНЫХ
                  СРЕДСТВ НА РАСЧЕТНЫХ СЧЕТАХ КООПЕРАТИВА И УПРАВЛЯЮЩЕЙ КОМПАНИИ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 5 */}
          <AnimatedSection delay={0.5} className="md:col-span-1">
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">ЦЕПОЧКА СОЗДАНИЯ ЦЕННОСТИ</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Value Chain Icon"
                    width={60}
                    height={60}
                    className="bg-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="bg-gray-700 p-6">
                <p className="text-white text-sm">
                  ЭКВИ ВЫКУПАЕТ ВРЕМЯ, КОТОРОЕ ИСПОЛЬЗУЕТСЯ ДЛЯ ПОКУПКИ НЕДВИЖИМОСТИ И УРАВНИВАНИЯ БАЛАНСОВ: ЧАСТЬ
                  ВРЕМЕНИ ВОЗВРАЩАЕТСЯ В ПРОДАЖИ ПО БОЛЕЕ ВЫСОКОЙ ЦЕНЕ ДЛЯ СПРАВЕДЛИВОГО РАСПРЕДЕЛЕНИЯ ДОХОДА МЕЖДУ
                  УЧАСТНИКАМИ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 6 */}
          <AnimatedSection delay={0.6} className="md:col-span-2 lg:col-span-3">
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">ОТСУТСТВИЕ АНАЛОГОВ НА РЫНКЕ</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="No Analogues Icon"
                    width={60}
                    height={60}
                    className="bg-yellow-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="bg-gray-700 p-6">
                <p className="text-white text-sm">
                  НА РЫНКЕ НЕТ АНАЛОГОВ СИСТЕМЫ ЭКВИ. АВТОМАТИЧЕСКАЯ ЭМИССИЯ ЧЕРЕЗ ТОРГИ: УПРАВЛЯЮЩАЯ КОМПАНИЯ ВЫКУПАЕТ
                  ВРЕМЯ И ВОЗОБНОВЛЯЕТ ЕГО В ПРОДАЖЕ ПО ПОВЫШЕННОЙ ЦЕНЕ, СОЗДАВАЯ ЦЕННОСТЬ ЭКВИ И ДОПОЛНИТЕЛЬНЫЙ ДОХОД
                  УЧАСТНИКАМ, СОХРАНЯЯ ПОЛНОЕ ОБЕСПЕЧЕНИЕ И РАБОТАЯ ИСКЛЮЧИТЕЛЬНО НА БЛАГО УЧАСТНИКОВ
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
