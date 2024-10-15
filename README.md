# Password Strength Analyzer Demo

This is a demo project showcasing how to use the [`password-strength-analyzer`](https://www.npmjs.com/package/password-strength-analyzer) npm package to validate password strength in a form.

## Features

- **Password Strength Validation**: The app validates passwords using the `password-strength-analyzer` package. It checks for a range of security metrics, including score and entropy.
- **Real-Time Feedback**: As the user types the password, real-time feedback is provided, showing whether the password meets the validation rules.
- **Password Visibility Toggle**: A feature to toggle password visibility, allowing the user to see the password while typing.

## Usage

This demo integrates `password-strength-analyzer` with a React form. The key components include:

- **Validation Logic**: The password is validated using the `validatePasswordStrength` function, which returns a score, entropy, and a validation result based on predefined rules.
- **Form Handling**: Managed with `react-hook-form`, along with `zod` for schema validation.
- **Components**:
  - `ValidationReport`: Displays password strength results, indicating which rules are met or failed.
  - `MetricsDisplay`: Shows visual feedback for the password's entropy and score.

## Dependencies

- [`password-strength-analyzer`](https://www.npmjs.com/package/password-strength-analyzer): The core library used for analyzing password strength.
- `react-hook-form`: For managing form state and validation.
- `zod`: Schema validation library used for password validation.
- `@radix-ui/react-icons`: For eye icons used in the password visibility toggle.
- `shadcn`: UI components.

## License

This project is open-source and licensed under the MIT License.

---

Feel free to clone, extend, and adapt this project to meet your needs!
