# Luhn 10 Validator

A modern web application for validating and visualizing the Luhn algorithm (also known as the Modulus 10 algorithm), commonly used for credit card number validation and other identification numbers.

## 🚀 Live Version

[Try it Live](https://luhnvalidor.vercel.app/)

---

## 📖 About

This tool allows you to check any sequence of numbers against the Luhn algorithm. It not only validates the number but also provides a step-by-step visualization of the calculation process.

## 🛠️ Tech Stack

- [Next.js 13](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Radix UI components
- Lucide React icons

## 🧑‍💻 Installation

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/killcod3/Luhn-Validator.git
cd luhn-10-validator

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📌 How to Use

1. Enter a number in the input field (spaces are automatically handled)
2. Click the "Validate" button
3. See the validation result (valid or invalid)
4. Check the visualization to understand how the Luhn algorithm processed your number
5. Read the explanation to learn more about the algorithm

## 📚 Understanding the Luhn Algorithm

The Luhn algorithm (also known as the "modulus 10" or "mod 10" algorithm) is a simple checksum formula used to validate various identification numbers, such as credit card numbers.

The algorithm works by:

1. Starting from the rightmost digit (excluding the check digit)
2. Moving left, doubling the value of every second digit
3. If doubling results in a two-digit number, adding those digits together
4. Adding all these digits together
5. If the total modulo 10 is equal to 0, the number is valid

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Jawad](https://github.com/killcod3)

