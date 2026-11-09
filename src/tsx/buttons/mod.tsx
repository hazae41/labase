import { Clicker } from "@/tsx/clicker/mod.tsx";
import React, { JSX } from "react";

React;

export function WideOppositeButton(props: { children?: JSX.Element } & JSX.IntrinsicElements["button"]) {
  const { children, ...rest } = props

  return <button className="flex-1 group po-2 bg-opposite text-opposite rounded-xl hover:bg-opposite-double-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-opposite inert:opacity-50"
    {...rest}>
    <Clicker>
      {children}
    </Clicker>
  </button>
}

export function WideContrastButton(props: { children?: JSX.Element } & JSX.IntrinsicElements["button"]) {
  const { children, ...rest } = props

  return <button className="flex-1 group po-2 bg-default-contrast rounded-xl hover:bg-default-double-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-default-contrast inert:opacity-50"
    {...rest}>
    <Clicker>
      {children}
    </Clicker>
  </button>
}

export function OppositeButton(props: { children?: JSX.Element } & JSX.IntrinsicElements["button"]) {
  const { children, ...rest } = props

  return <button className="group po-2 bg-opposite text-opposite rounded-xl hover:bg-opposite-double-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-opposite inert:opacity-50"
    {...rest}>
    <Clicker>
      {children}
    </Clicker>
  </button>
}