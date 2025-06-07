"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./animated-section";

// Tab content types
type TabType = "opportunities" | "howItWorks" | "facts";

export default function InformationSection() {
  const [activeTab, setActiveTab] = useState<TabType>("opportunities");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleAccordion = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isExpanded = (itemId: string) => expandedItems.includes(itemId);

  return (
    <section>
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ПОЛЕЗНАЯ ИНФОРМАЦИЯ
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap mb-8 gap-2">
            <motion.button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "opportunities"
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("opportunities")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              НОВЫЕ ВОЗМОЖНОСТИ
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "howItWorks"
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("howItWorks")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              КАК ЭТО РАБОТАЕТ?
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "facts"
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
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
                    className="grid md:grid-cols-2 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="p-6">
                      <h3 className="lg:text-lg font-bold mb-2">
                        ИСПОЛЬЗОВАНИЕ НЕДВИЖИМОСТИ И ВРЕМЕНИ ПОЛЬЗОВАНИЯ КАК
                        СРЕДСТВА ОБМЕНА
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                      <p>
                        Экви, благодаря своему двойному номиналу, позволяет
                        использовать недвижимость и время ее использования как
                        средства обмена и накопления, обеспечивая гибкость,
                        оперативность и высокую востребованность на рынке
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Row 2 */}
                <AnimatedSection delay={0.2}>
                  <motion.div
                    className="grid md:grid-cols-2 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="p-6">
                      <h3 className="lg:text-lg font-bold mb-2">
                        ГИБКИЕ УСЛОВИЯ АРЕНДЫ И ВЛАДЕНИЯ
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                      <p>
                        Использование недвижимости на любые сроки для любых
                        целей благодаря индивидуальным условиям аренды
                        обеспечивает повышенный спрос
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Additional rows... */}
                <AnimatedSection delay={0.3}>
                  <motion.div
                    className="grid md:grid-cols-2 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="p-6">
                      <h3 className="lg:text-lg font-bold mb-2">
                        НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ ИНВЕСТИРОВАНИЯ
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                      <p>
                        Начните инвестировать в недвижимость с небольших сумм —
                        прирост дохода доступен каждому! Кроме приобретения
                        экви, участники могут зарабатывать на них, просто
                        рекомендуя систему — по аналогии с риэлторской комиссией
                        от продаж
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <motion.div
                    className="grid md:grid-cols-2 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="p-6">
                      <h3 className="lg:text-lg font-bold mb-2">
                        АВТОМАТИЧЕСКАЯ ТОРГОВЛЯ ВРЕМЕНЕМ ЧЕРЕЗ ВЫКУП
                        НЕДВИЖИМОСТИ
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                      <p>
                        Формула внутренних торгов временем через выкуп
                        недвижимости не имеет аналогов: она эксклюзивно
                        предоставлена участникам системы и обеспечивает
                        дополнительный доход 24 часа в сутки
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <motion.div
                    className="grid md:grid-cols-2 bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="p-6">
                      <h3 className="lg:text-lg font-bold mb-2">
                        СИСТЕМА ПРИНАДЛЕЖИТ УЧАСТНИКАМ
                      </h3>
                    </div>
                    <div className="p-6 bg-gray-300 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                      <p>
                        При регистрации каждый участник получает стартовый
                        капитал и долю в системе — что гарантирует доход с
                        первого дня! Доля включает распределение внутренних
                        процентов и доходов управляющей компании среди
                        участников
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Card 1 */}
                <AnimatedSection delay={0.1}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6 flex justify-between gap-2 h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-col max-w-[411px] gap-2">
                      <h3 className="lg:text-lg font-bold">
                        АВТОМАТИЧЕСКАЯ ЭМИССИЯ ДОХОДА
                      </h3>
                      <p className=" text-xl/5 md:text-2xl/5 font-akrobat font-bold">
                        Процесс создания новых ЭКВИ происходит аввтоматически
                        при взаимодействии ресурсов времени и недвижимости.
                        Эмиссия ЭКВИ автоматическая и зависит от работы двух
                        номиналов: это сразу отображается на балансе и в
                        движении по счету
                      </p>
                    </div>
                    <div className="relative min-w-[60px] md:min-w-[90px] lg:min-w-[160px]">
                      <Image
                        src="/img/workicon1.png"
                        alt="Automatic income emission"
                        width={160}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Card 2 */}
                <AnimatedSection delay={0.2}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6 flex justify-between gap-2 h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-col max-w-[411px] gap-2">
                      <h3 className="lg:text-lg font-bold">ВАЛЮТА ВРЕМЕНИ</h3>
                      <p className="text-xl/5 md:text-2xl/5 font-akrobat font-bold">
                        Валюта времени - это один из номиналов валюты учета
                        ЭКВИ, фиксированное количество которой используется для
                        покупки права на использование недвижимости на
                        определенные периоды, что обеспечивает её постоянный
                        рост стоимости
                      </p>
                    </div>
                    <div className="relative min-w-[60px] md:min-w-[90px] lg:min-w-[160px]">
                      <Image
                        src="/img/workicon2.png"
                        alt="Automatic income emission"
                        width={160}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Card 3 */}
                <AnimatedSection delay={0.3}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6 flex justify-between gap-2 h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-col max-w-[411px] gap-2">
                      <h3 className="lg:text-lg font-bold">
                        УПРАВЛЕНИЕ И ОБСЛУЖИВАНИЕ ОБЪЕКТОВ
                      </h3>
                      <p className="text-xl/5 md:text-2xl/5 font-akrobat font-bold">
                        Управляющая компания кооператива берет на себя
                        управление всеми процессами обслуживания объектов — вся
                        информация хранится защищенно. Она также выкупает время
                        аренды и начисляет его держателям метров, обеспечивая
                        замкнутый цикл
                      </p>
                    </div>
                    <div className="relative min-w-[60px] md:min-w-[90px] lg:min-w-[160px]">
                      <Image
                        src="/img/workicon3.png"
                        alt="Automatic income emission"
                        width={160}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Card 4 */}
                <AnimatedSection delay={0.4}>
                  <motion.div
                    className="bg-gray-200 rounded-lg p-6 flex justify-between gap-2 h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-col max-w-[411px] gap-2">
                      <h3 className="lg:text-lg font-bold">
                        ЦЕПОЧКА СОЗДАНИЯ ЦЕННОСТИ
                      </h3>
                      <p className="text-xl/5 md:text-2xl/5 font-akrobat font-bold">
                        Экви выкупает время, которое затем используется для
                        покупки недвижимости и уравнивания балансов: часть
                        времени возвращается в продажи по более высокой цене для
                        справедливого распределения дохода между участниками
                      </p>
                    </div>
                    <div className="relative min-w-[60px] md:min-w-[90px] lg:min-w-[160px]">
                      <Image
                        src="/img/workicon4.png"
                        alt="Automatic income emission"
                        width={160}
                        height={96}
                        className="object-contain"
                      />
                    </div>
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
                      <h3 className="text-base md:text-xl font-bold">
                        СБАЛАНСИРОВАННАЯ СИСТЕМА УПРАВЛЕНИЯ АКТИВАМИ
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded("item1") ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
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
                          <div className="p-6 bg-gray-200 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                            <p>
                              Управляющая компания кооператива берет на себя
                              управление всеми процессами обслуживания объектов
                              — вся информация хранится защищенно. Она также
                              выкупает время аренды и начисляет его держателям
                              метров, обеспечивая замкнутый цикл
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
                      <h3 className="text-base md:text-xl font-bold">
                        ВСЕ НЕОБХОДИМЫЕ ТЕХНОЛОГИИ НА ОДНОЙ ПЛАТФОРМЕ
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded("item2") ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
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
                          <div className="p-6 bg-gray-200 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                            <p>
                              Платформа объединяет передовые решения в области
                              математики, экономики, права, автоматизации
                              процессов и управления активами для вашего
                              удобства.
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
                      <h3 className="text-base md:text-xl font-bold">
                        ВЫСОКАЯ СТЕПЕНЬ ЗАЩИТЫ ВАШИХ ИНВЕСТИЦИЙ
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded("item3") ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
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
                          <div className="p-6 bg-gray-200 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                            <p>
                              Ваша безопасность — приоритет платформы:
                              применяются современные механизмы защиты для
                              обеспечения сохранности ваших средств.
                              недвижимость полностью соответствует одному
                              номиналу, а время — денежным средствам на счетах
                              кооператива и управляющей компании
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
                      <h3 className="text-base md:text-xl font-bold">
                        НЕ УПУСТИТЕ ВОЗМОЖНОСТЬ СТАТЬ ЧАСТЬЮ ИННОВАЦИЙ
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded("item4") ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
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
                          <div className="p-6 bg-gray-200 text-xl/5 md:text-2xl/6 font-akrobat font-bold">
                            <p>
                              Присоединяйтесь к системе ЭКВИ`C, которая меняет
                              правила игры на рынке недвижимости, инвестиций,
                              криптовалюты, финансовых технологий, недвижимости
                              и многих других сфер
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
  );
}
