export default function factorial(n) {
  if (n < 0) {
    throw new Error("Use Positive Number");
  } else if (typeof n !== "number") {
    throw new Error("Use Whole Number");
  } else if (!Number.isInteger(n)) {
    throw new Error("Use Whole Number");
  } else if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

