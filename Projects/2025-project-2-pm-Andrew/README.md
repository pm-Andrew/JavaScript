# JavaScript Form Validation Assignment

## General Instructions

- Develop a professional-looking and attractive HTML form that employs JavaScript validation.
- Your HTML must be in a file named `project_2.html`.
- Your CSS must be in a folder/file named `css/style.css`.
- Your JavaScript must be in a folder/file named `js/script.js`.
- Ensure accessibility using WAVE tests without errors, alerts, or contrast issues.
- The use of the HTML `required` attribute is prohibited.
- You must provide a set of instructions for the user.

## Form Attributes and Values

The form must have the following attributes and values set:

- name = "order"
- id = "order"
- action = "https://ctec.clark.edu/~belgort/formprocessing/processform.php"
- method = "POST"

## Form Fields

- [x] First Name: Text input, max 20 characters.
- [x] Last Name: Text input, max 20 characters.
- [x] Address: Text input, max 40 characters.
> What about `<address>`? - NOPE, not this file
- [x] City: Text input, max 30 characters.
- [x] State: Select with all 50 states as options. 
> Used Co-Pilot to create a select of all 50 states 
> Its faster and tedious 
- [x] Product: Select with 15 product options.
- [x] Quantity: Numeric input, 5 characters.
- [x] Contact: Radio buttons for phone contact preference. Include at least 4 different options for them to select one from.
- [x] Terms and Conditions: Checkbox for acceptance.
- [x] Interests: Checkboxes for interests selection. 0 or many options may be selected.
- [x] Feedback: Textarea for input.
- [x] A button to submit the form.

## Styling and Design

- Ensure the form looks professional and not amateurish.
- You are encouraged to use Bootstrap, plain old CSS, or Tailwind CSS for styling if desired.
- Your CSS must be in a folder named css.
- Enhance styling for mobile responsiveness.

## Form Validation Rules (JavaScript in `js/script.js`)

- All fields are required.
- Implement error messaging for each validation rule.
- Error bucket that appears above and below the form.
- Disable the submit button when the form is submitted and checked for validation. Re-enable it after displaying if necessary, the error buckets.
- Place focus on the first unfilled-out form field.

## Assignment Submission

- Push code to GitHub and submit with the phrase "Ready to Grade" in Canvas.

## Grading Rubric

| Item                                                 | Full Marks | Partial Marks | No Marks |
| :--------------------------------------------------- | :--------- | :------------ | :------- |
| Form and field coding accuracy                       | 35         | 17.5          | 0        |
| Validation rules implemented correctly in JavaScript | 40         | 20            | 0        |
| Error bucket functionality                           | 30         | 15            | 0        |
| HTML/CSS/WAVE compliance                             | 25         | 12.5          | 0        |
| Professional styled with CSS                         | 60         | 30            | 0        |
