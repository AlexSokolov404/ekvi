"use client"

import Image from "next/image"
import Link from "next/link"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

export default function AppShowcase() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ИСПОЛЬЗУЙ НАШЕ РЕШЕНИЕ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">ЭКВИ PAY'S</h3>
            <p className="text-xl text-gray-500">
              КОТОРОЕ ОБЪЕДИНЯЕТ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ, ЛИЧНЫЙ КАБИНЕТ И TELEGRAM-БОТ
            </p>
          </div>
        </AnimatedSection>

        {/* Phone Mockups */}
        <div className="relative max-w-5xl mx-auto h-[500px] md:h-[600px]">
          {/* Center Phone (Largest) */}
          <AnimatedSection delay={0.2}>
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[280px] md:w-[320px]"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="ЭКВИ PAY'S Main App"
                  width={300}
                  height={600}
                  className="rounded-[36px] border-4 border-black relative z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
                  <div className="bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=60&width=60" alt="ЭКВИ Logo" width={60} height={60} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Left Phone 1 */}
          <AnimatedSection delay={0.1}>
            <motion.div
              className="absolute left-0 top-1/2 transform -translate-y-1/3 z-20 w-[220px] md:w-[260px] hidden sm:block"
              whileHover={{ x: 10, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="ЭКВИ PAY'S Telegram Bot"
                width={250}
                height={500}
                className="rounded-[36px] border-4 border-black"
              />
            </motion.div>
          </AnimatedSection>

          {/* Left Phone 2 */}
          <AnimatedSection delay={0.15}>
            <motion.div
              className="absolute left-[15%] top-1/2 transform -translate-y-1/2 translate-x-1/4 z-10 w-[220px] md:w-[260px] hidden sm:block"
              whileHover={{ x: 5, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="ЭКВИ PAY'S Balance"
                width={250}
                height={500}
                className="rounded-[36px] border-4 border-black"
              />
            </motion.div>
          </AnimatedSection>

          {/* Right Phone 1 */}
          <AnimatedSection delay={0.15}>
            <motion.div
              className="absolute right-[15%] top-1/2 transform -translate-y-1/2 -translate-x-1/4 z-10 w-[220px] md:w-[260px] hidden sm:block"
              whileHover={{ x: -5, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="ЭКВИ PAY'S Features"
                width={250}
                height={500}
                className="rounded-[36px] border-4 border-black"
              />
            </motion.div>
          </AnimatedSection>

          {/* Right Phone 2 */}
          <AnimatedSection delay={0.1}>
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/3 z-20 w-[220px] md:w-[260px] hidden sm:block"
              whileHover={{ x: -10, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="ЭКВИ PAY'S Tasks"
                width={250}
                height={500}
                className="rounded-[36px] border-4 border-black"
              />
            </motion.div>
          </AnimatedSection>

          {/* Mobile View (Only Center Phone) */}
          <div className="sm:hidden flex justify-center">
            <AnimatedSection>
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="ЭКВИ PAY'S App"
                width={300}
                height={600}
                className="rounded-[36px] border-4 border-black"
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Download/Access Buttons */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
            <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
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

            <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
              <Link
                href="#"
                className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className="text-xs">Скачать из</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
              <Link
                href="#"
                className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Telegram"
                    width={24}
                    height={24}
                    className="w-6 h-6"
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
  )
}
