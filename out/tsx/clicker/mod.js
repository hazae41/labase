import React from "react";
React;
export function Clicker(props) {
    const { children } = props;
    return React.createElement("div", { className: "h-full w-full flex justify-center items-center gap-2 select-none group-active:scale-90 transition-transform" }, children);
}
