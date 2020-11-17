import * as React from "react";
import * as ReactDOM from "react-dom";
import { shadowDomRoot } from "./mf-demo-employees";

const datePickerPopover: React.SFC = ({ children }) => {
  const root = shadowDomRoot?.current?.shadowRoot?.querySelector(
    ".mf-demo-employees"
  );
  if (root) {
    return ReactDOM.createPortal(<>{children}</>, root);
  }
  return null;
};

export { datePickerPopover as DatePickerPopover };
