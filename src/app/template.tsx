"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressProvider from "../components/progress-bar";

import { useState } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressProvider>
        <>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={8000}
            hideProgressBar
            className={"Toast_container_width"}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
            style={{
              fontFamily: "Public Sans, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
            }}
          />
        </>
      </ProgressProvider>
    </QueryClientProvider>
  );
};

export default Template;
