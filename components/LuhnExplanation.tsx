export default function LuhnExplanation() {
  return (
    <div className="mt-6 bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
      <h3 className="text-lg font-medium mb-2">About the Luhn Algorithm</h3>
      <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
        Error control codes can be implemented within written values such as account numbers and credit card numbers 
        by appending a single check digit according to the Luhn-10 Algorithm.
      </p>
      
      <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
        This particular algorithm is part of a standard (ISO-7812-1) used worldwide for various credit cards and 
        other identification numbers.
      </p>
      
      <p className="text-slate-700 dark:text-slate-300 text-sm">
        There is a one-in-ten chance that a totally random number will pass this simple validity test.
      </p>
    </div>
  );
}