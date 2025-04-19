"use client"

import Image from "next/image"
import Link from "next/link"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

export default function StepsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">ЧЕТЫРЕ ШАГА ДЛЯ ДОСТИЖЕНИЯ УСПЕХА</h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mb-16">
          {/* Step 1 - 25% */}
          <AnimatedSection delay={0.1} className="mb-8 md:mb-0">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Gray dotted circle (background) */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeDasharray="5,5" />
                  {/* Orange progress arc - 25% */}
                  <path
                    d="M50,5 A45,45 0 0,1 73.3,16.7"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Number */}
                  <text x="50" y="55" fontSize="36" fontWeight="bold" textAnchor="middle">
                    1
                  </text>
                </svg>
              </div>
              <p className="text-center font-medium max-w-[180px]">ЗАРЕГИСТРИРУЙТЕСЬ</p>
            </motion.div>
          </AnimatedSection>

          {/* Connector */}
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>

          {/* Step 2 - 50% */}
          <AnimatedSection delay={0.2} className="mb-8 md:mb-0">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Gray dotted circle (background) */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeDasharray="5,5" />
                  {/* Orange progress arc - 50% */}
                  <path
                    d="M50,5 A45,45 0 0,1 95,50"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Number */}
                  <text x="50" y="55" fontSize="36" fontWeight="bold" textAnchor="middle">
                    2
                  </text>
                </svg>
              </div>
              <p className="text-center font-medium max-w-[180px]">ПОЛУЧИТЕ СТАРТОВЫЙ КАПИТАЛ В ПОДАРОК</p>
            </motion.div>
          </AnimatedSection>

          {/* Connector */}
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>

          {/* Step 3 - 75% */}
          <AnimatedSection delay={0.3} className="mb-8 md:mb-0">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Gray dotted circle (background) */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeDasharray="5,5" />
                  {/* Orange progress arc - 75% */}
                  <path
                    d="M50,5 A45,45 0 0,1 95,50 A45,45 0 0,1 50,95"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Number */}
                  <text x="50" y="55" fontSize="36" fontWeight="bold" textAnchor="middle">
                    3
                  </text>
                </svg>
              </div>
              <p className="text-center font-medium max-w-[180px]">
                ПРИОБРЕТАЙТЕ БОЛЬШЕ ЭКВИ ИЛИ ЗАРАБАТЫВАЙТЕ НА СВОИХ АКТИВАХ
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Connector */}
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>

          {/* Step 4 - 100% */}
          <AnimatedSection delay={0.4}>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Full orange circle - 100% */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#F59E0B" strokeWidth="3" />
                  {/* Number */}
                  <text x="50" y="55" fontSize="36" fontWeight="bold" textAnchor="middle">
                    4
                  </text>
                </svg>
              </div>
              <p className="text-center font-medium max-w-[180px]">ПРОДАВАЙТЕ ЭКВИВ ЛЮБОЙ РАБОЧИЙ ДЕНЬ</p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Registration Banner */}
        <AnimatedSection delay={0.5}>
          <motion.div
            className="bg-green-500 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white font-medium mb-4 md:mb-0 text-center md:text-left">
              <p>ЗАРЕГИСТРИРУЙТЕСЬ ЗА 2 МИНУТЫ –</p>
              <p>ПРОСТО ПЕРЕЙДИТЕ В ПРИЛОЖЕНИЕ</p>
            </div>

            <div className="mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="ЭКВИ Coin"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>

            <Link
              href="#"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              ПЕРЕЙТИ К ПРИЛОЖЕНИЮ
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
