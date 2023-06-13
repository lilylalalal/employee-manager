# Long Practice: Class Syntax with Employees and Managers

This practice will covers:
1. Create and use JavaScript ES6 classes
2. Use inheritance to create a child of a parent class
3. Use polymorphism to overwrite/override an inherited method
4. Use commonJS modules to import/export your code

## Learning Goals

* Understand how a child class inherits from a parent class
* Know when and how to use `super` and `extends`
* Know how to override a parent class's method

## Introduction

HR has tasked you with building a simple application to keep track of each 
employees' `name`, `title`, `salary`, and `manager`. You will also need to
keep track of each manager's `name`, `title`, `salary`, their own `manager` 
(if they have one), as well as a list of each of employee they manage directly.

You will then need to calculate an employee/manager's individual yearly bonus, 
taking into account whether they are an employee or a manager.

## Project Overview

Leverage basic Class syntax to create an `Employee` class and 'Manager' class in seperated file that 
will inherit its properties from the `Employee` class. 

Using common JSmodules to import/export your classes will allow you to keep your
code clean and maintainable.  

Once create both an instance of an employee and a manager, you
will alter your `Employee` constructor to dynamically add an `Employee` to 
their `Manager`'s `employees` list upon instantiation.

Finding an `Employee`'s bonus should prove pretty easy, but in order to 
calculate a `Manager`'s bonus you will need to use iteration and recursion
in order to find and sum the salaries of each `Employee` under that `Manager`.
If an `Employee` is also a `Manager` you'll need to sum their `Employee`s' 
salaries as well.


## Phases

* Basic Phase 1: Define an `Employee` class 
* Basic Phase 2: Define a `Manager` class that extends the `Employee` class
* Intermediate Phase 3: Dynamically add `Employee`s to a `Manager`'s employee
array
* Advanced Phase 4: Calculate Bonuses
* Bonus Phase 5: Local Testing
