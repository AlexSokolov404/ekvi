"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedSection from "./animated-section"

// Tab content types
type TabType = "opportunities" | "howItWorks" | "facts"

export default function InformationSection() {
  const [activeTab, setActiveTab] = useState<TabType>("opportunities")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleAccordion = (itemId: string) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const isExpanded = (itemId: string) => expandedItems.includes(itemId)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h2>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap mb-8 gap-2">
            <motion.button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "opportunities" ? "bg-gray-400 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("opportunities")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              НОВЫЕ ВОЗМОЖНОСТИ
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "howItWorks" ? "bg-gray-400 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("howItWorks")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              КАК ЭТО РАБОТАЕТ?
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "facts" ? "bg-gray-400 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("facts")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              АРГУМЕНТЫ И ФАКТЫ
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "opportunities" && (
            <motion.div
              key="opportunities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                {/* Row 1 */}
                <AnimatedSection delay={0.1}>
                  <motion.div
                    className="grid md:grid-cols-2 gap-4 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        ИСПОЛЬЗОВАНИЕ НЕДВИЖИМОСТИ И ВРЕМЕНИ ПОЛЬЗОВАНИЯ КАК СРЕДСТВА ОБМЕНА
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300">
                      <p>
                        ЭКВИ, БЛАГОДАРЯ СВОЕМУ ДВОЙНОМУ НОМИНАЛУ, ПОЗВОЛЯЕТ ИСПОЛЬЗОВАТЬ НЕДВИЖИМОСТЬ И ВРЕМЯ ЕЕ
                        ИСПОЛЬЗОВАНИЯ КАК СРЕДСТВА ОБМЕНА И НАКОПЛЕНИЯ, ОБЕСПЕЧИВАЯ ГИБКОСТЬ, ОПЕРАТИВНОСТЬ И ВЫСОКУЮ
                        ВОСТРЕБОВАННОСТЬ НА РЫНКЕ
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Row 2 */}
                <AnimatedSection delay={0.2}>
                  <motion.div
                    className="grid md:grid-cols-2 gap-4 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">ГИБКИЕ УСЛОВИЯ АРЕНДЫ И ВЛАДЕНИЯ</h3>
                    </div>
                    <div className="p-6 bg-gray-300">
                      <p>
                        ИСПОЛЬЗОВАНИЕ НЕДВИЖИМОСТИ НА ЛЮБЫЕ СРОКИ ДЛЯ ЛЮБЫХ ЦЕЛЕЙ БЛАГОДАРЯ ИНДИВИДУАЛЬНЫМ УСЛОВИЯМ
                        АРЕНДЫ ОБЕСПЕЧИВАЕТ ПОВЫШЕННЫЙ СПРОС
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Additional rows... */}
                <AnimatedSection delay={0.3}>
                  <motion.div
                    className="grid md:grid-cols-2 gap-4 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ ИНВЕСТИРОВАНИЯ</h3>
                    </div>
                    <div className="p-6 bg-gray-300">
                      <p>
                        НАЧНИТЕ ИНВЕСТИРОВАТЬ В НЕДВИЖИМОСТЬ С НЕБОЛЬШИХ СУММ — ПРИРОСТ ДОХОДА ДОСТУПЕН КАЖДОМУ! КРОМЕ
                        ПРИОБРЕТЕНИЯ ЭКВИ, УЧАСТНИКИ МОГУТ ЗАРАБАТЫВАТЬ НА НИХ, ПРОСТО РЕКОМЕНДУЯ СИСТЕМУ — ПО АНАЛОГИИ
                        С РИЭЛТОРСКОЙ КОМИССИЕЙ ОТ ПРОДАЖ
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <motion.div
                    className="grid md:grid-cols-2 gap-4 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        АВТОМАТИЧЕСКАЯ ТОРГОВЛЯ ВРЕМЕНЕМ ЧЕРЕЗ ВЫКУП НЕДВИЖИМОСТИ
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300">
                      <p>
                        ФОРМУЛА ВНУТРЕННИХ ТОРГОВ ВРЕМЕНЕМ ЧЕРЕЗ ВЫКУП НЕДВИЖИМОСТИ НЕ ИМЕЕТ АНАЛОГОВ: ОНА ЭКСКЛЮЗИВНО
                        ПРЕДОСТАВЛЕНА УЧАСТНИКАМ СИСТЕМЫ И ОБЕСПЕЧИВАЕТ ДОПОЛНИТЕЛЬНЫЙ ДОХОД 24 ЧАСА В СУТКИ
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <motion.div
                    className="grid md:grid-cols-2 gap-4 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">СИСТЕМА ПРИНАДЛЕЖИТ УЧАСТНИКАМ</h3>
                    </div>
                    <div className="p-6 bg-gray-300">
                      <p>
                        ПРИ РЕГИСТРАЦИИ КАЖДЫЙ УЧАСТНИК ПОЛУЧАЕТ СТАРТОВЫЙ КАПИТАЛ И ДОЛЮ В СИСТЕМЕ — ЧТО ГАРАНТИРУЕТ
                        ДОХОД С ПЕРВОГО ДНЯ! ДОЛЯ ВКЛЮЧАЕТ РАСПРЕДЕЛЕНИЕ ВНУТРЕННИХ ПРОЦЕНТОВ И ДОХОДОВ УПРАВЛЯЮЩЕЙ
                        КОМПАНИИ СРЕДИ УЧАСТНИКОВ
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              </div>
            </motion.div>
          )}

          {activeTab === "howItWorks" && (
            <motion.div
              key="howItWorks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <AnimatedSection delay={0.1}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold mb-4">АВТОМАТИЧЕСКАЯ ЭМИССИЯ ДОХОДА</h3>
                      <div className="w-24 h-24 relative">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Automatic income emission"
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-sm">
                      ПРОЦЕСС СОЗДАНИЯ НОВЫХ ЭКВИ ПРОИСХОДИТ АВТОМАТИЧЕСКИ ПРИ ВЗАИМОДЕЙСТВИИ РЕСУРСОВ ВРЕМЕНИ И
                      НЕДВИЖИМОСТИ. ЭМИССИЯ ЭКВИ АВТОМАТИЧЕСКАЯ И ЗАВИСИТ ОТ РАБОТЫ ДВУХ НОМИНАЛОВ: ЭТО СРАЗУ ОТРАЖАЕТСЯ
                      У ДЕРЖАТЕЛЯ НА БАЛАНСЕ И В ДВИЖЕНИИ ПО СЧЕТУ
                    </p>
                  </motion.div>
                </AnimatedSection>

                {/* Card 2 */}
                <AnimatedSection delay={0.2}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold mb-4">ВАЛЮТА ВРЕМЕНИ</h3>
                      <div className="w-24 h-24 relative">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Time currency"
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-sm">
                      ВАЛЮТА ВРЕМЕНИ — ЭТО ОДИН ИЗ НОМИНАЛОВ СИСТЕМЫ ЭКВИ, ФИКСИРОВАННОЕ КОЛИЧЕСТВО КОТОРОЙ ИСПОЛЬЗУЕТСЯ
                      ДЛЯ ПОКУПКИ ПРАВА НА ИСПОЛЬЗОВАНИЕ НЕДВИЖИМОСТИ НА ОПРЕДЕЛЕННЫЕ ПЕРИОДЫ, ЧТО ОБЕСПЕЧИВАЕТ ЕЁ
                      ПОСТОЯННЫЙ РОСТ СТОИМОСТИ
                    </p>
                  </motion.div>
                </AnimatedSection>

                {/* Card 3 */}
                <AnimatedSection delay={0.3}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold mb-4">УПРАВЛЕНИЕ И ОБСЛУЖИВАНИЕ ОБЪЕКТОВ</h3>
                      <div className="w-24 h-24 relative">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Object management"
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-sm">
                      УПРАВЛЯЮЩАЯ КОМПАНИЯ КООПЕРАТИВА БЕРЕТ НА СЕБЯ УПРАВЛЕНИЕ ВСЕМИ ПРОЦЕССАМИ ОБСЛУЖИВАНИЯ ОБЪЕКТОВ —
                      ВСЯ ИНФОРМАЦИЯ ХРАНИТСЯ ЗАЩИЩЕННО. ОНА ТАКЖЕ ВЫКУПАЕТ ВРЕМЯ АРЕНДЫ И НАЧИСЛЯЕТ ЕГО ДЕРЖАТЕЛЯМ
                      МЕТРОВ, ОБЕСПЕЧИВАЯ ЗАМКНУТЫЙ ЦИКЛ
                    </p>
                  </motion.div>
                </AnimatedSection>

                {/* Card 4 */}
                <AnimatedSection delay={0.4}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold mb-4">ЦЕПОЧКА СОЗДАНИЯ ЦЕННОСТИ</h3>
                      <div className="w-24 h-24 relative">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Value chain"
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-sm">
                      ЭКВИ ВЫКУПАЕТ ВРЕМЯ, КОТОРОЕ ЗАТЕМ ИСПОЛЬЗУЕТСЯ ДЛЯ ПОКУПКИ НЕДВИЖИМОСТИ И УРАВНИВАНИЯ БАЛАНСОВ:
                      ЧАСТЬ ВРЕМЕНИ ВОЗВРАЩАЕТСЯ В ПРОДАЖИ ПО БОЛЕЕ ВЫСОКОЙ ЦЕНЕ ДЛЯ СПРАВЕДЛИВОГО РАСПРЕДЕЛЕНИЯ ДОХОДА
                      МЕЖДУ УЧАСТНИКАМИ
                    </p>
                  </motion.div>
                </AnimatedSection>
              </div>
            </motion.div>
          )}

          {activeTab === "facts" && (
            <motion.div
              key="facts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                {/* Accordion Item 1 */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-gray-300 rounded-lg overflow-hidden">
                    <motion.button
                      className="w-full p-6 flex justify-between items-center"
                      onClick={() => toggleAccordion("item1")}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    >
                      <h3 className="text-lg font-bold">СБАЛАНСИРОВАННАЯ СИСТЕМА УПРАВЛЕНИЯ АКТИВАМИ</h3>
                      <motion.div animate={{ rotate: isExpanded("item1") ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronUp className="h-6 w-6" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {isExpanded("item1") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 bg-gray-200">
                            <p>
                              УПРАВЛЯЮЩАЯ КОМПАНИЯ КООПЕРАТИВА БЕРЕТ НА СЕБЯ УПРАВЛЕНИЕ ВСЕМИ ПРОЦЕССАМИ ОБСЛУЖИВАНИЯ
                              ОБЪЕКТОВ — ВСЯ ИНФОРМАЦИЯ ХРАНИТСЯ ЗАЩИЩЕННО. ОНА ТАКЖЕ ВЫКУПАЕТ ВРЕМЯ АРЕНДЫ И НАЧИСЛЯЕТ
                              ЕГО ДЕРЖАТЕЛЯМ МЕТРОВ, ОБЕСПЕЧИВАЯ ЗАМКНУТЫЙ ЦИКЛ
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>

                {/* Accordion Item 2 */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-gray-300 rounded-lg overflow-hidden">
                    <motion.button
                      className="w-full p-6 flex justify-between items-center"
                      onClick={() => toggleAccordion("item2")}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    >
                      <h3 className="text-lg font-bold">ВСЕ НЕОБХОДИМЫЕ ТЕХНОЛОГИИ НА ОДНОЙ ПЛАТФОРМЕ</h3>
                      <motion.div animate={{ rotate: isExpanded("item2") ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronUp className="h-6 w-6" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {isExpanded("item2") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 bg-gray-200">
                            <p>
                              ПЛАТФОРМА ОБЪЕДИНЯЕТ ПЕРЕДОВЫЕ РЕШЕНИЯ В ОБЛАСТИ МАТЕМАТИКИ, ЭКОНОМИКИ, ПРАВА,
                              АВТОМАТИЗАЦИИ ПРОЦЕССОВ И УПРАВЛЕНИЯ АКТИВАМИ ДЛЯ ВАШЕГО УДОБСТВА.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>

                {/* Accordion Item 3 */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-gray-300 rounded-lg overflow-hidden">
                    <motion.button
                      className="w-full p-6 flex justify-between items-center"
                      onClick={() => toggleAccordion("item3")}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    >
                      <h3 className="text-lg font-bold">ВЫСОКАЯ СТЕПЕНЬ ЗАЩИТЫ ВАШИХ ИНВЕСТИЦИЙ</h3>
                      <motion.div animate={{ rotate: isExpanded("item3") ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronUp className="h-6 w-6" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {isExpanded("item3") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 bg-gray-200">
                            <p>
                              ВАША БЕЗОПАСНОСТЬ — ПРИОРИТЕТ ПЛАТФОРМЫ: ПРИМЕНЯЮТСЯ СОВРЕМЕННЫЕ МЕХАНИЗМЫ ЗАЩИТЫ ДЛЯ
                              ОБЕСПЕЧЕНИЯ СОХРАННОСТИ ВАШИХ СРЕДСТВ. НЕДВИЖИМОСТЬ ПОЛНОСТЬЮ СООТВЕТСТВУЕТ ОДНОМУ
                              НОМИНАЛУ, А ВРЕМЯ — ДЕНЕЖНЫМ СРЕДСТВАМ НА СЧЕТАХ КООПЕРАТИВА И УПРАВЛЯЮЩЕЙ КОМПАНИИ
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>

                {/* Accordion Item 4 */}
                <AnimatedSection delay={0.4}>
                  <div className="bg-gray-300 rounded-lg overflow-hidden">
                    <motion.button
                      className="w-full p-6 flex justify-between items-center"
                      onClick={() => toggleAccordion("item4")}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    >
                      <h3 className="text-lg font-bold">НЕ УПУСТИТЕ ВОЗМОЖНОСТЬ СТАТЬ ЧАСТЬЮ ИННОВАЦИЙ</h3>
                      <motion.div animate={{ rotate: isExpanded("item4") ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronUp className="h-6 w-6" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {isExpanded("item4") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 bg-gray-200">
                            <p>
                              ПРИСОЕДИНЯЙТЕСЬ К СИСТЕМЕ ЭКВИ, КОТОРАЯ МЕНЯЕТ ПРАВИЛА ИГРЫ НА РЫНКЕ НЕДВИЖИМОСТИ,
                              ИНВЕСТИЦИЙ, КРИПТОВАЛЮТЫ, ФИНАНСОВЫХ ТЕХНОЛОГИЙ, НЕДВИЖИМОСТИ И МНОГИХ ДРУГИХ СФЕР.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
