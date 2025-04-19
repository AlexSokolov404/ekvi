"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="mb-6 md:mb-0">
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="ICBCoin Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter">ICBCoin</h2>
                  <p className="text-xs">International Crypto Bank Coin</p>
                </div>
              </motion.div>
              <p className="text-sm">2021 - 2025 ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
            </div>

            {/* Contact and Social */}
            <div className="text-right">
              <div className="mb-4">
                <motion.p className="text-lg font-medium" whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                  +7 (900) 888 77 77
                </motion.p>
                <motion.p className="text-lg font-medium" whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                  +7 (900) 888 99 99
                </motion.p>
              </div>
              <div className="flex justify-end space-x-4">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="bg-black rounded-full p-2 inline-block">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="Telegram"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="bg-black rounded-full p-2 inline-block">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="border-t border-gray-300 mt-8"></div>
    </footer>
  )
}
