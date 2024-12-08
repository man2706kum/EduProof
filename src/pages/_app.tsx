import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState<boolean>(false);
  const [useTestAadhaar, setUseTestAadhaar] = useState<boolean>(false);

  useEffect(() => {
    // Clear any session or login state on app start
    localStorage.clear(); // Clear local storage
    sessionStorage.clear(); // Clear session storage
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <AnonAadhaarProvider
          _useTestAadhaar={useTestAadhaar}
          _appName="Anon Aadhaar"
        >
          <Component
            {...pageProps}
            setUseTestAadhaar={setUseTestAadhaar}
            useTestAadhaar={useTestAadhaar}
          />
        </AnonAadhaarProvider>
      ) : null}
    </>
  );
}