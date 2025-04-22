"use client";

import { useState } from "react";
import { LucideArrowRight } from "lucide-react";

interface LuhnInputProps {
  onSubmit: (value: string) => void;
  isValid: boolean | null;
}

export default function LuhnInput({ onSubmit, isValid }: LuhnInputProps) {
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and spaces
    if (/^[\d\s]*$/.test(value)) {
      setInputValue(value);
    }
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter number to validate"
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 transition-all 
              ${isValid === true ? "border-green-500 focus:ring-green-500/20" : 
                isValid === false ? "border-red-500 focus:ring-red-500/20" : 
                "border-slate-300 focus:ring-blue-500/20 dark:border-slate-700"}`}
            aria-label="Number to validate"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition-colors flex items-center justify-center"
        >
          <span className="mr-2">Validate</span>
          <LucideArrowRight size={16} />
        </button>
      </form>
      <p className="text-sm text-slate-500 mt-2 dark:text-slate-400">
        Enter a number to check if it passes the Luhn-10 algorithm (spaces allowed)
      </p>
    </div>
  );
}