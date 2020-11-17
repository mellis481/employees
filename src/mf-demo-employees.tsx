import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import root from "react-shadow";
import "./set-public-path";

const styles = require("!!to-string-loader!css-loader!./styles.css");

// Reference to shadow DOM root in case you need it for 'portaled'
// Example in date-picker-popover.tsx
export let shadowDomRoot: React.RefObject<HTMLElement> | undefined;

class WrappedRoot extends React.Component<any> {
  constructor(props: any) {
    super(props);
    shadowDomRoot = React.createRef();
  }
  render() {
    return (
      <root.div ref={shadowDomRoot} mode="open">
        <div className="mf-demo-employees">
          <style type="text/css">{styles}</style>
          <Root />
        </div>
      </root.div>
    );
  }
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: WrappedRoot,
});

export const { bootstrap, mount, unmount } = lifecycles;
