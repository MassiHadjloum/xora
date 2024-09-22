import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import CountUp from "react-countup";
import Button from './Button'
import { TPlan } from '@/lib/Types'

export interface PricingCardProps {
  plan: TPlan;
  index: number;
  monthly: boolean
}

const PricingCad = ({ plan, index, monthly }: PricingCardProps) => {
  return (
    <div
      key={plan.id}
      className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
    >
      {index === 1 && (
        <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
      )}

      <div
        className={clsx(
          "absolute left-0 right-0 z-2 flex items-center justify-center",
          index === 1 ? "-top-6" : "-top-6 xl:-top-11",
        )}
      >
        <Image
          width={30}
          height={30}
          src={plan.logo}
          alt={plan.title}
          className={clsx(
            "object-contain drop-shadow-2xl",
            index === 1 ? "size-[120px]" : "size-[88px]",
          )}
        />
      </div>

      <div
        className={clsx(
          "relative flex flex-col items-center",
          index === 1 ? "pt-24" : "pt-12",
        )}
      >
        <div
          className={clsx(
            "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
            index === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
          )}
        >
          {plan.title}
        </div>

        <div className="relative z-2 flex items-center justify-center">
          <div
            className={clsx(
              "h-num flex items-start",
              index === 1 ? "text-p3" : "text-p4",
            )}
          >
            ${" "}
            <CountUp
              start={plan.priceMonthly}
              end={monthly ? plan.priceMonthly : plan.priceYearly}
              duration={0.4}
              useEasing={false}
              preserveValue
            />
          </div>
          <div className="small-1 relative top-3 ml-1 uppercase text-p4">
            / mo
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
          index === 1 && "border-b",
        )}
      >
        {plan.caption}
      </div>

      <ul className="mx-auto space-y-4 xl:px-7">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="relative flex items-center gap-5 text-p4"
          >
            <Image
              src={"/images/check.png"}
              alt="check"
              width={30}
              height={30}
              className="size-10 object-contain"
            />
            <p className="flex-1">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex w-full justify-center">
        <Button icon={plan.icon}>Get Started</Button>
      </div>

      {index === 1 && (
        <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
          Limited time offer
        </p>
      )}
    </div>
  )
}

export default PricingCad

export const PricingBg = () => {
  return (
    <div className="pricing-bg">
      <Image
        src="/images/bg-outlines.svg"
        width={960}
        height={380}
        alt="outline"
        className="relative z-2"
      />
      <Image
        src="/images/bg-outlines-fill.png"
        width={960}
        height={380}
        alt="outline"
        className="absolute inset-0 opacity-5 mix-blend-soft-light"
      />
    </div>
  )
}