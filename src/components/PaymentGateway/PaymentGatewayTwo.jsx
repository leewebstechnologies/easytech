"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
const PaymentGatewayTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <section
        className="payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10"
        ref={ref}
      >
        <div className="container">
          <div className="content flex items-center gap-8">
            <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
              <h3 className="heading3">Payment Gateway Services</h3>
              <div className="body3 text-secondary">
                Get personalized financial advice to help reach your financial
                goals. We provide reliable and secure payment gateway services
                for business of all sizes. With our cutting-edge technology and
                24/7 customer support, you can easily accept payments from
                customers all over the world.
              </div>
              <div className="button-block">
                <Link
                  className="button-main bg-black hover:bg-black text-white bg-blue rounded-full"
                  href="/"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PaymentGatewayTwo;
