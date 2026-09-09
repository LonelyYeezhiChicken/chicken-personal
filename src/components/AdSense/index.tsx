import React, { useEffect } from "react";

interface AdSenseProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdSense({
  client = "ca-pub-5790726279404978",
  slot,
  format = "auto",
  responsive = true,
  style = { display: "block" },
}: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ignore during development or before script is active
    }
  }, []);

  return (
    <div
      className="adsense-banner-container"
      style={{
        margin: "1.2rem auto",
        textAlign: "center",
        overflow: "hidden",
        minHeight: 0,
      }}
    >
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        {...(slot ? { "data-ad-slot": slot } : {})}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
