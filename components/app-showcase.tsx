"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./animated-section";

export default function AppShowcase() {
  return (
    <section>
      <div className="container overflow-hidden relative mx-auto px-4 max-w-[1440px] flex flex-col justify-between">
        <AnimatedSection>
          <div className="text-center mb-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ИСПОЛЬЗУЙ НАШЕ РЕШЕНИЕ
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">ЭКВИсофт</h3>
            <p className="text-xl text-gray-500">
              КОТОРОЕ ОБЪЕДИНЯЕТ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ, ЛИЧНЫЙ КАБИНЕТ И
              TELEGRAM-БОТ
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Phone Mockups */}
          <div className="absolute min-w-[1024px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex sm:gap-2 items-center justify-between sm:flex-row gap-10">
              {/* Center Phone (Largest) */}
              <div className="order-3">
                <AnimatedSection delay={0.2}>
                  <div className="relative">
                    <Image
                      src="/img/phones/MockupMid.png"
                      alt="ЭКВИ PAY'S Main App"
                      width={300}
                      height={500}
                    />
                  </div>
                </AnimatedSection>
              </div>

              {/* Left Phone 1 */}
              <div className="order-1">
                <AnimatedSection delay={0.1}>
                  <Image
                    src="/img/phones/MockupLeft2.png"
                    alt="ЭКВИ PAY'S Telegram Bot"
                    width={250}
                    height={500}
                    className="pt-5"
                  />
                </AnimatedSection>
              </div>

              {/* Left Phone 2 */}
              <div className="order-2">
                <AnimatedSection delay={0.15}>
                  <Image
                    src="/img/phones/MockupLeft1.png"
                    alt="ЭКВИ PAY'S Balance"
                    width={250}
                    height={500}
                  />
                </AnimatedSection>
              </div>

              {/* Right Phone 1 */}
              <div className="order-4">
                <AnimatedSection delay={0.15}>
                  <Image
                    src="/img/phones/MockupRight1.png"
                    alt="ЭКВИ PAY'S Features"
                    width={250}
                    height={500}
                  />
                </AnimatedSection>
              </div>

              {/* Right Phone 2 */}
              <div className="order-5">
                <AnimatedSection delay={0.1}>
                  <Image
                    src="/img/phones/MockupRight2.png"
                    alt="ЭКВИ PAY'S Tasks"
                    width={250}
                    height={500}
                    className="pt-5"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
          {/* Phone Mockups hidden */}
          <div className="h-[470px] invisible"></div>
        </div>

        {/* Download/Access Buttons */}
        <AnimatedSection delay={0.3}>
          <div className="flex max-[690px]:flex-col justify-center items-center gap-4 mt-12 relative z-10">
            <Link
              href="https://icbprofit.com/login"
              className="w-[206px] flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="mr-3 text-2xl font-bold">Э</div>
              <div>
                <div className="text-xs">Личный кабинет</div>
                <div className="font-bold">ЭКВИ PAY'S</div>
              </div>
            </Link>

            <Link
              href="https://apkfab.com/equi/com.EQUI.myapp/apk?h=dfaf0a422864db522b4922dda9bc74c3ecfccaf79662485e8d87ce8c92b5a563"
              className="w-[206px] flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="mr-3">
                <Image
                  src="/img/GooglePlayIcon.png"
                  alt="Google Play"
                  width={30}
                  height={33}
                />
              </div>
              <div>
                <div className="text-xs">Скачать из</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Link>

            <Link
              href="https://t.me/icbprof_bot?start=001"
              className="w-[206px] flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="mr-3">
                <Image
                  src="/img/TelegramIcon.png"
                  alt="Telegram"
                  width={35}
                  height={35}
                />
              </div>
              <div>
                <div className="text-xs">Бот</div>
                <div className="font-bold">Telegram</div>
              </div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
