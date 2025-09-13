import { GoogleTagManager as GoogleTagManager_ } from "@next/third-parties/google";

const GoogleTagManager = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return <GoogleTagManager_ gtmId="GTM-TP7XBLVD" />;
};

export default GoogleTagManager;
