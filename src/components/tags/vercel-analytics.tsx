import { Analytics } from "@vercel/analytics/react";

const VercelAnalyticsTag = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return <Analytics />;
};

export default VercelAnalyticsTag;
