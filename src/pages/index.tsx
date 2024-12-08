import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

type HomeProps = {
  setUseTestAadhaar: (state: boolean) => void;
  useTestAadhaar: boolean;
};

export default function Home({ setUseTestAadhaar, useTestAadhaar }: HomeProps) {
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const router = useRouter(); // Initialize router here

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      setLoggedIn(true);
      router.push("/application"); // Redirect to application form after login
    }
  }, [anonAadhaar, router]);

  const switchAadhaar = () => {
    setUseTestAadhaar(!useTestAadhaar); // Toggle between Test and Real modes
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl mb-4">Welcome! Please Log In</h1>
        <p className="mb-6">
          You&apos;re currently using the{" "}
          <strong>{useTestAadhaar ? "Test" : "Real"}</strong> Aadhaar mode.
        </p>
        <button
          onClick={switchAadhaar}
          className="rounded bg-gray-200 px-4 py-2 mb-4 text-gray-700 font-semibold hover:bg-gray-300"
        >
          Switch to {useTestAadhaar ? "Real" : "Test"} Aadhaar Mode
        </button>
        <LogInWithAnonAadhaar nullifierSeed={1234} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <main className="flex flex-col items-center gap-8 bg-white rounded-2xl max-w-screen-sm mx-auto h-[24rem] md:h-[20rem] p-8">
        <h1 className="font-bold text-2xl">Welcome to Anon Aadhaar Example</h1>
        <p>Prove your Identity anonymously using your Aadhaar card.</p>
        {useTestAadhaar ? (
          <p>You&apos;re using the <strong>Test</strong> Aadhaar mode</p>
        ) : (
          <p>You&apos;re using the <strong>Real</strong> Aadhaar mode</p>
        )}
        <button
          onClick={switchAadhaar}
          type="button"
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Switch to {useTestAadhaar ? "Real" : "Test"} Mode
        </button>
      </main>
      <div className="flex flex-col items-center gap-4 rounded-2xl max-w-screen-sm mx-auto p-8">
        {anonAadhaar.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            <p>Got your Aadhaar Identity Proof</p>
            <>Welcome anon!</>
            {latestProof && (
              <AnonAadhaarProof code={JSON.stringify(latestProof, null, 2)} />
            )}
          </>
        )}
      </div>
    </div>
  );
}