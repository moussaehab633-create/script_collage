# Student Academic Management System

## Project Description
This project is a simple Student Academic Management System built using JavaScript and Object-Oriented Programming (OOP).

It manages student information, calculates academic averages, assigns grades, checks student status, and applies bonus marks for struggling students.

## Technologies Used
- JavaScript (ES6)
- Object-Oriented Programming (OOP)
- Array Methods

## Student Class

The `Student` class contains the following properties:

- `id`: Student ID.
- `name`: Student name.
- `grades`: Array containing grades for three subjects.
- `attendance`: Student attendance percentage.

## Main Features

### 1. Calculate Average
Uses `reduce()` to calculate the average of the student's grades.

### 2. Calculate Grade
Assigns a letter grade based on the student's average:

| Average | Grade |
|---|---|
| 90–100 | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| 50–59 | E |
| Below 50 | F |

### 3. Check Student Status
A student passes if:
- Average is 50 or higher.
- Attendance is 75% or higher.

Otherwise, the student needs review.

### 4. Mercy Committee
The system uses JavaScript array methods to support struggling students:

- `filter()`: Finds students with averages between 40 and 49.
- `map()`: Adds 5 bonus marks to their averages.
- `reduce()`: Calculates the total adjusted averages.
- `Math.min()`: Prevents the average from exceeding 100.

### 5. Display Reports
Uses `console.log()` and `console.table()` to display student reports and mercy committee results.

## How to Run

1. Install Node.js.
2. Save the code in a file named `student.js`.
3. Open the terminal in the project folder.
4. Run:

```bash
node student.js
```

## Learning Objectives

This project demonstrates:
- JavaScript Classes and Constructors.
- Objects and Arrays.
- Methods and Functions.
- Conditional Statements (`if/else`).
- Logical Operators (`&&`).
- Array Methods (`forEach`, `filter`, `map`, `reduce`).
- Template Literals.
- Console Output.

## Author
Student Academic Management System Project
