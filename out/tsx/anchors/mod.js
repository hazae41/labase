import { Clicker } from "../clicker/mod.js";
import React from "react";
React;
export function OppositeAnchor(props) {
    const { children, ...rest } = props;
    return React.createElement("a", { className: "group po-2 bg-opposite text-opposite rounded-xl hover:bg-opposite-double-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-opposite inert:opacity-50", ...rest },
        React.createElement(Clicker, null, children));
}
export function ContrastAnchor(props) {
    const { children, ...rest } = props;
    return React.createElement("a", { className: "group po-2 bg-default-contrast rounded-xl hover:bg-default-double-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-default-contrast inert:opacity-50", ...rest },
        React.createElement(Clicker, null, children));
}
export function WideContrastAnchor(props) {
    const { children, ...rest } = props;
    return React.createElement("a", { className: "flex-1 group po-2 bg-default-contrast rounded-xl hover:bg-default-double-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-default-contrast inert:opacity-50", ...rest },
        React.createElement(Clicker, null, children));
}
