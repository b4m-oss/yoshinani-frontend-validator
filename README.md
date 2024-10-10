# Yoshinani Frontend Validator

Yoshinani Frontend Validator is a library designed to provide modern, effective validation and user experience (UX) for typical web forms. While it is optimized for the UX standards typically required in Japan, it is highly customizable to accommodate different languages and cultural contexts.

## Key Features

- **Real-Time Validation**: Validation triggers as users type or when focus shifts between form fields, allowing users to detect errors before submission.
- **Clear Required Fields**: Labels for required fields automatically include "Required", while optional fields display "Optional".
- **Responsive Label and Field Layout**: Labels and fields are displayed side-by-side on wide screens and vertically stacked on narrower screens. You can also enforce vertical stacking using CSS classes.
- **Clickable Radio Buttons and Checkboxes**: Radio buttons and checkboxes have large clickable areas, styled for clarity and ease of use.
- **Validation Success Indication**: When input satisfies validation rules, an indicator appears next to the label.
- **Character Count Display**: For fields with a `maxlength`, the remaining character count is displayed in real time. Fields with a `minlength` will display an error if the minimum character requirement is not met.
- **Input Character Meter**: A feature for text-based input fields, such as `textarea`, showing a meter indicating progress towards the character limit.
- **Auto-Fill Postal Code**: Automatically fills the address based on postal code input.
- **Submit Button Disablement**: The submit button is disabled if there are missing required fields or validation errors.
- **Prevent Double-Click on Submit Button**: Once the submit button is pressed, it cannot be clicked again until the page transitions, preventing double submissions.
- **Step Navigation Feature**: Designed for forms with confirmation steps, such as email confirmation or final review pages.
- **Match Fields**: Validates if one field’s value matches another, such as confirming a password.
- **JavaScript Regular Expression Validation**: Instead of relying on the browser's interpretation of the `pattern` attribute, JavaScript-based regex validation ensures consistent behavior across browsers.
- **Custom Function Execution**: You can run custom JavaScript functions on specific fields for advanced validation or custom behaviors.

## Usage

Yoshinani Frontend Validator primarily focuses on frontend validation but is designed with backend integration in mind. The library operates independently with VanillaJS, making it easy to integrate into any frontend stack without dependencies.

---

Contributions and customization are welcome! Let's improve form validation and UX together with Yoshinani Frontend Validator.
