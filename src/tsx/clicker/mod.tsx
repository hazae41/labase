import React, { ReactNode } from "react";

React;

export function Clicker(props: { children?: ReactNode }) {
  const { children } = props

  return <div className="h-full w-full flex justify-center items-center gap-2 select-none group-active:scale-90 transition-transform">
    {children}
  </div>
}