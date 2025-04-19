"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Lock/unlock body scroll when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLinkClick = (href: string) => {
    closeMenu()

    // Smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 300) // Small delay to allow menu to close first
  }

  // Burger button variants
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  }

  // Menu variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  }

  return (
    <div className="md:hidden">
      {/* Burger Button */}
      <button
        className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.span
          className="w-8 h-0.5 bg-black mb-2 block"
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-8 h-0.5 bg-black mb-2 block"
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-8 h-0.5 bg-black block"
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-40 shadow-xl flex flex-col"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 flex items-center border-b">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="ICBCoin Logo"
                width={40}
                height={40}
                className="object-contain mr-3"
              />
              <div>
                <h2 className="text-xl font-bold tracking-tighter">ICBCoin</h2>
                <p className="text-xs">International Crypto Bank Coin</p>
              </div>
            </div>

            <nav className="p-6 flex-1">
              <ul className="space-y-6">
                {links.map((link, index) => (
                  <motion.li key={index} variants={menuItemVariants} className="border-b border-gray-100 pb-4">
                    <button
                      className="text-xl font-medium hover:text-gray-600 transition-colors w-full text-left"
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-6 mt-auto border-t">
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="bg-black rounded-full p-2 inline-block">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Telegram"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </Link>
                <Link href="#" className="bg-black rounded-full p-2 inline-block">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-500">2021 - 2025 ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
