[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/z0RFZSCB)
# COIS-2430H: Assignment 3

Like with assignment two you must start this assignment by cloning your fork of the Classroom Git repo. All work should be completed in the repo.

As much as this assignment is focused on JavaScript, you should still practice best practices in regards to HTML and CSS, and write enough CSS to make your page look professional.

## Question 1 - Array Iterators

Like the JS on A2, there is no visual component to this question. The HTML really just needs to load the JavaScript, everything else will output to the console. The JS file should the completion of the task, and all necessary testing, so that just loading the file will complete the task with enough different inputs to ensure it works.

### Even Numbers [3 marks]

Create a function that determines if a provided number is even. Define an array of numbers, then on the array use the appropriate array **iterator** to determine if the array contains only even numbers using the function you defined. Output the results, and test with several arrays.

### Long Names [3 marks]

Define an array of names. Use an **iterator** to retrieve a new array containing only the names longer then 12 characters. Your iterator should be passed an anonymous arrow function. Test with several different arrays

## First Names [3 marks]

Define an array called `fullNames` that contains 7 javascript objects of TV/Movie characters. Each object should have a `firstname` and `lastname`. Define a variable named `firstNames` and assign it to the result of mapping over the `fullNames` array, so that `firstNames` contains only the first names of the objects in the the `fullNames` array.

## Question 2

### General Information

This question consists of several tasks. Please read the following carefully:

- Place each of the following tasks in its own `<section>` with a heading. These sections may have IDs to make it easier to select the elements within them.
- Other than the sections, no HTML elements in this question should have any IDs and classes should only be added for styling purposes (**Do not** use those classes as part of your selectors unless told otherwise).
- All of the tasks below should be accomplished in the same **external** JavaScript file.
  - There should be **no** JavaScript in your HTML file.
- **Unless specified** (it won't always be), changing the look of an element can be done using either:
  - Direct style modification (using the `Element.style` attribute); or
  - Adding a CSS class with those styles pre-applied (using the`Element.classList` attribute).

### 1: Hidden image [2.0 mark]

- **What to put in your HTML:**
  - An image (`<img>`) of your choice
- **What your script should do:**
  - When the image is clicked...
    - Make it disappear.
  - Do this by adding a pre-defined (one you've defined in your `.css` file) class.

### 2: Changing colours [3.0 marks]

- **What to put in your HTML:**
  - A paragraph with text in it.
- **What your script should do:**
  - When the paragraph is clicked...
    - Alternate the background between its original color and deep pink with each click using the a class in the class list
  - When the paragraph is double-clicked...
    - Set the text-color to purple using direct style modification

### 3: Text-cloning [6.0 marks]

- **What to put in your HTML:**
  - A text `<input>` field; and
  - An empty `<p>`.
  - A clear `<button>`
  - A bold `<button>`
- **What your script should do:**
  - As the text input is typed into...
    - Whatever is typed should appear verbatim inside the paragraph, by added the character the user just typed.
    - "As" meaning, "for every character typed," not, "once the cursor leaves the field." **Do not replace the entire contents of the paragraph with the contents of the text box each time.**
  - When the clear button is pressed, the paragraph and the textbox should be emptied, and the cursor should be placed in the textbox
  - When the bold button is pressed the **first half** of the contents of the paragraph (at that time) should be wrapped in a strong tag (with some sort of appropriate styling for strong in your style sheet), and the bold button should be removed from the page (so they can only bold once). However, the above clear button should put the bold button back if it's not already there.

**Correctly handle `Backspace` by removing the last character from the paragraph rather then outputting _Backspace_**

### 4: Complicated list things [5 marks]

- **What to put in your HTML:**
  - A unordered list with five list-items inside of it.
- **What your script should do:**
  - When the mouse is over of the **first** or **last** list-items...
    - It's background should turn pink (it should go back to it's original color when the mouse is elsewhere)
  - When any of the list-items are clicked...
    - A new list-item should be added to the unordered list directly after the list-item that was clicked.
    - Write your code in such a way that even the newly added list-items trigger the addition of another list item, however for simplicities sake adding a new list item to the end won't change the definition of **last** when it comes to the hover above

### 5: A simple fetch [4 marks]

- **What to put in your HTML:**

  - A `<div>` which contains...
    - The first paragraph of your favourite Wikipedia article (copy-pasted); and
    - A heading which contains that articles title.
  - A second HTML file which contains...
    - Another copy of the same _paragraph, heading_ setup (without the `<div>`), but from a different Wikipedia page; and
    - Nothing else. Not even the `<html>`.

- **What your script should do:**

  - When the heading is clicked on...
    - Use an AJAX/Fetch request to get the contents of the second file; and then
    - Replace the contents of the `<div>` which is currently on the page with the contents of the file you just fetched.
  - You are **not** permitted to select the current `<div>` directly: you must traverse the DOM from the element which was clicked on.

### 6: Working with an API [8.0 marks ]

For this question you will need to register with [freecurrencyapi](https://freecurrencyapi.com) to access the free version of their currency conversion API. When you register, you will receive and API key. The documentation for the conversion endpoint can be found here: <https://freecurrencyapi.com/docs/latest#request-parameters>. You cannot use either of the JavaScript libraries provided.

**Note: The email with my API key ended up in my SPAM folder, so be sure to check there is you don't receive it right away**

- **What to put in your HTML:**

  - A text `<input>` to collect a currency value
  - A `<select>` list with at least 4 base (convert from) currency types (You can see the list of available currencies and their associated codes here: [https://freecurrencyapi.com/docs/currency-list](https://freecurrencyapi.com/docs/currency-list))
  - A `<select>` list with at least 4 target (convert to) currency types.

_hint: To make building your URL easier, you can use the API required currency codes for the values in your dropdown list, but what the user sees should be actual currencies._

- **What your script should do:**

  - validate that the currency provided is numeric, and something was chosen for the _target_ and the _base_ currencies
  - Use JavaScript's `fetch` (either with aysnc/await or without) and freecurrentcyapi's lastest endpoint to get the conversions rates necessary to go from the _base_ currency the user chose to the _target_ currency the user chose.
  - Use the conversion rate returned to convert the value provided by the user into the target currency.
  - Display the results you receive (nicely formatted)
  - Be sure to handle errors

## Grading

Along with the marks indicated for each part above, there will be overall marks for documentation, testing, code quality and good git habits.

## Testing

For this assignment you only need to test in one browser. Include enough screenshots to illustrate that each section does what it's suppose to.

## Submission

Make sure all you work has been pushed to your git repo. Like with assignment three, there will be marks associated with your use of Git for this assignment. Submit your git repo link to Blackboard on completion.
