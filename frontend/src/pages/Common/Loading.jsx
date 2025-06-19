import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming ShadCN Skeleton component

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

function Loading() {
  const [quote, setQuote] = useState("");

  // Change quote every 5 seconds
  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white bg-[url(/images/full-overlay-bg.png)]">
      <div className="flex flex-col items-center  w-full max-w-2xl">
        <div className="w-20 h-20 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-8 text-center text-gray-900 text-sm italic">
          <p className="text-lg">{quote}</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
