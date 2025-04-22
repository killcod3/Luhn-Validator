/**
 * Validates if a number passes the Luhn algorithm check
 */
export function validateLuhn(input: string): boolean {
  // Remove spaces and non-digit characters
  const digits = input.replace(/\D/g, "");
  
  if (digits.length === 0) return false;
  
  let sum = 0;
  let shouldDouble = false;
  
  // Start from the rightmost digit and move left
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9; // Same as adding the digits together
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
}

/**
 * Gets calculation steps for visual representation
 */
export function getLuhnCalculationSteps(input: string): {
  digits: number[];
  multipliers: number[];
  products: number[];
  results: number[];
  sum: number;
} {
  const digits = input.replace(/\D/g, "").split("").map(Number);
  const multipliers: number[] = [];
  const products: number[] = [];
  const results: number[] = [];
  
  let sum = 0;
  let shouldDouble = false;
  
  // Start from the rightmost digit and move left
  for (let i = digits.length - 1; i >= 0; i--) {
    const multiplier = shouldDouble ? 2 : 1;
    multipliers[i] = multiplier;
    
    let product = digits[i] * multiplier;
    products[i] = product;
    
    // If product is two digits, add them together
    let result = product;
    if (product > 9) {
      result = Math.floor(product / 10) + (product % 10);
    }
    
    results[i] = result;
    sum += result;
    shouldDouble = !shouldDouble;
  }
  
  return {
    digits,
    multipliers,
    products,
    results,
    sum
  };
}