
# BMI Calculator

A simple and responsive **BMI (Body Mass Index) Calculator** built using **HTML5, CSS3, and JavaScript**.

The application allows users to enter their height and weight, calculates their BMI, and displays the corresponding BMI category.

## 🚀 Features

- Enter height in centimeters (cm)
- Enter weight in kilograms (kg)
- Calculate BMI instantly
- Display BMI rounded to two decimal places
- Show BMI category:
  - Underweight
  - Normal Weight
  - Overweight
  - Obese
- Validate empty inputs
- Reject zero and negative values
- Validate realistic height and weight ranges
- Interactive BMI scale
- Responsive design for mobile and desktop
- Modern and user-friendly UI

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling, responsive layout, animations, and UI design
- **JavaScript** – BMI calculation, validation, and dynamic result display

## 📐 BMI Formula

BMI is calculated using the following formula:

```text
BMI = Weight (kg) / Height² (m)
````

For example:

```text
Height = 170 cm
Weight = 65 kg

Height = 1.70 m

BMI = 65 / (1.70 × 1.70)
BMI = 22.49
```

## 📊 BMI Categories

| BMI Range      | Category      |
| -------------- | ------------- |
| Below 18.5     | Underweight   |
| 18.5 – 24.9    | Normal Weight |
| 25.0 – 29.9    | Overweight    |
| 30.0 and above | Obese         |

## 📁 Project Structure

```text
BMI-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any modern web browser.
4. Enter your height and weight.
5. Click **Calculate BMI**.
6. Your BMI and category will be displayed.

## 🔍 Validation

The application checks for:

* Empty height or weight fields
* Invalid numbers
* Zero values
* Negative values
* Height outside the allowed range
* Weight outside the allowed range

## 🎯 Objective

This project was created to practice:

* HTML form handling
* CSS responsive design
* JavaScript functions
* Mathematical calculations
* Input validation
* Conditional statements
* DOM manipulation
* Dynamic UI updates

## 🔮 Future Scope

Possible future improvements include:

* Add age and gender information
* Add BMI history
* Add BMI charts
* Add metric and imperial unit options
* Add local storage for previous results
* Add dark mode
* Add health and fitness recommendations



You can save this as **`README.md`** in the same folder as `index.html`, `style.css`, and `script.js`, then upload all four files to GitHub.
```
