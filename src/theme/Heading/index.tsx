import React, { type ReactNode } from "react";
import Heading from "@theme-original/Heading";
import type { Props } from "@theme/Heading";
import AdSense from "@site/src/components/AdSense";

export default function HeadingWrapper(props: Props): ReactNode {
  if (props.as === "h1") {
    return (
      <>
        <Heading {...props} />
        <AdSense />
      </>
    );
  }
  return <Heading {...props} />;
}
