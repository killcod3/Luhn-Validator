"use client";

import { useMemo } from "react";
import { getLuhnCalculationSteps } from "@/lib/luhn";

interface LuhnVisualizationProps {
  number: string;
  isValid: boolean;
}

export default function LuhnVisualization({ number, isValid }: LuhnVisualizationProps) {
  const steps = useMemo(() => getLuhnCalculationSteps(number), [number]);
  
  if (!number) return null;
  
  const { digits, multipliers, products, results, sum } = steps;
  
  return (
    <div className="overflow-x-auto w-full mt-6 bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm animate-in fade-in slide-in-from-bottom duration-500">
      <h3 className="text-lg font-medium mb-4">Checking [{number.replace(/\s/g, "")}]</h3>
      
      <div className="font-mono text-center">
        {/* Display digits */}
        <div className="flex justify-center animate-in fade-in slide-in-from-left duration-300 delay-150">
          {digits.map((digit, index) => (
            <div key={`digit-${index}`} className="flex-1 min-w-8 px-2 py-1">{digit}</div>
          ))}
        </div>
        
        {/* Display multipliers */}
        <div className="flex justify-center text-slate-600 dark:text-slate-400 animate-in fade-in slide-in-from-right duration-300 delay-300">
          {multipliers.map((multiplier, index) => (
            <div key={`mult-${index}`} className="flex-1 min-w-8 px-2 py-1">×{multiplier}</div>
          ))}
        </div>
        
        {/* Separator line */}
        <div className="flex justify-center animate-in fade-in duration-300 delay-450">
          {digits.map((_, index) => (
            <div key={`sep-${index}`} className="flex-1 min-w-8 px-2">--</div>
          ))}
        </div>
        
        {/* Display results */}
        <div className="flex justify-center text-blue-600 dark:text-blue-400 font-bold animate-in fade-in slide-in-from-left duration-300 delay-600">
          {results.map((result, index) => (
            <div key={`result-${index}`} className="flex-1 min-w-8 px-2 py-1">{result}</div>
          ))}
        </div>
        
        {/* Sum calculation */}
        <div className="mt-4 text-left animate-in fade-in slide-in-from-bottom duration-300 delay-750">
          <div className="inline-block text-left">
            {results.join(" + ")} = {sum}
          </div>
        </div>
        
        {/* Result */}
        <div className="mt-4 text-center font-mono text-xl animate-in fade-in zoom-in duration-300 delay-900">
          {sum} ≡ {sum % 10} (mod 10)
        </div>
        
        {/* Test Result */}
        <div className="mt-6 text-center animate-in fade-in zoom-in duration-500 delay-1000">
          <div className={`inline-block px-4 py-2 rounded-md font-medium ${
            isValid ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : 
                      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
          }`}>
            The test {isValid ? "PASSED" : "FAILED"} {isValid ? "since the result is zero." : "since the result is not zero."}
          </div>
        </div>
        
        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 italic text-center animate-in fade-in duration-300 delay-1000">
          In the above summation, any two-digit product is included as the sum of its two digits. (e.g. 18 --&gt; 1 + 8 = 9)
        </div>
      </div>
    </div>
  );
}