import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./set-public-path";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;

function domElementGetter() {
  let el = document.getElementById("mf-content");
  if (!el) {
    el = document.createElement("div");
    el.id = "mf-demo-employees";
    document.body.appendChild(el);
  }
  return el;
}
