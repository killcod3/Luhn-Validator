"use client";

import { useState, useEffect } from "react";
import { validateLuhn } from "@/lib/luhn";
import LuhnInput from "./LuhnInput";
import LuhnVisualization from "./LuhnVisualization";
import LuhnExplanation from "./LuhnExplanation";
import { Loader2 } from "lucide-react";

export default function LuhnCalculator() {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (value: string) => {
    setNumber(value);
    setIsValid(validateLuhn(value));
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom duration-700">
      <div className="mb-8 text-center">
       <h1 className="text-2xl md:text-3xl font-bold mb-2">LUHN-10 Error Detection Tool</h1>
            <div className="h-1 w-20 bg-blue-600 rounded mx-auto"></div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <LuhnInput onSubmit={handleSubmit} isValid={isValid} />
        
        {isValid !== null && (
          <LuhnVisualization number={number} isValid={isValid} />
        )}
      </div>
      
      <LuhnExplanation />
      
      <div className="mt-6 text-sm text-center text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} |{" "}
        <a
          href="https://github.com/killcod3" // Replace with your actual GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-200 cursor-pointer [text-decoration:none] hover:shadow-[0_0_8px_2px_rgba(59,130,246,0.5)] hover:text-blue-600 rounded px-1"
          style={{ textDecoration: "none" }}
        >
          Made with ❤️ by {"Jawad"}
        </a>
      </div>
    </div>
  );
}