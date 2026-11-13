import React, { JSX, ReactNode } from "react";

React;

export function Menu(props: { children?: ReactNode }) {
  const { children } = props

  return <div className="flex flex-col gap-2">
    {children}
  </div>
}

export function MenuAnchor(props: JSX.IntrinsicElements["a"]) {
  const { children, ...rest } = props

  return <a className="group flex-1 po-2 rounded-xl flex items-center justify-start gap-4 whitespace-nowrap cursor-pointer hover:bg-default-double-contrast focus-visible:outline-none focus-visible:bg-default-double-contrast inert:opacity-50"
    {...rest}>
    {children}
  </a>
}

export function MenuButton(props: JSX.IntrinsicElements["button"]) {
  const { children, ...rest } = props

  return <button className="group flex-1 po-2 rounded-xl flex items-center justify-start gap-4 whitespace-nowrap enabled:cursor-pointer enabled:hover:bg-default-double-contrast focus-visible:outline-none focus-visible:bg-default-double-contrast disabled:opacity-50"
    {...rest}>
    {children}
  </button>
}