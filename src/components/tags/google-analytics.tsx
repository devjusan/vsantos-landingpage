import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleAnalyticsTag = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return <GoogleAnalytics gaId="G-MHC75GTLT5" />;
};

export default GoogleAnalyticsTag;
