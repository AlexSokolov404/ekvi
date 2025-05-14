"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./animated-section";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="mb-6 md:mb-0">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="ICBCoin Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <Image
                  src="/svg/logoEkvi.svg"
                  alt="ICBCoin Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <p className="text-xs">Инвесторы всех стран, объдиняйтесь!</p>
              </div>
              <p className="text-sm">2021 - 2025 ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
            </div>

            {/* Contact and Social */}
            <div className="text-right">
              <div className="mb-4">
                <p className="text-lg font-medium">+7 (900) 888 77 77</p>
                <p className="text-lg font-medium">+7 (900) 888 99 99</p>
              </div>
              <div className="flex justify-end space-x-4">
                <div>
                  <Link
                    href="#"
                    className="bg-black rounded-full p-2 inline-block"
                  >
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="Telegram"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="#"
                    className="bg-black rounded-full p-2 inline-block"
                  >
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="border-t border-gray-300 mt-8"></div>
    </footer>
  );
}
