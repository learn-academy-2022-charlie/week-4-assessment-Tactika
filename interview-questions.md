# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?
     - Your answer:
       > Props in React are the data and methods from your main app passed down to components. Since we want to keep our state in the main app, we pass props down to components to allow us access to the data and methods. At Learn Academy I used props to pass while creating the tic-tac-toe app, passing down click methods, ensuring my clicks would pass the data to ensure the correct symbol was marked on the board.

     - Researched answer:
       > Props in React is another way of saying properties and allow you to make your applications more dynamic. Props can be supplied to children components with or without destructuring.

2. What is a DOM event?
     - Your answer:
       > A DOM event is an event that can be triggered by accessing a DOM element or node. Some of these events are based on mouse clicks, screen touches, or even key presses. They are usually associated with listener events to watch for the previously mentioned events. The DOM object is made up of the representation of the html elements of the page, also known as nodes. I've used these DOM events to be able to handle form submissions, checking boxes for game movements, and even changing a pages display to show the current time updating every second.

     - Researched answer:
       > DOM Events are a way browsers signal some event happened. The most common way of DOM Event manipulation uses the DOM Level 2 model which provides the most flixible handling of events in current browsers. DOM 2.0 uses addEventListener vs previous onclick methods.

3. What is object-oriented programming? How is it different than functional programming?
     - Your answer:
       > Object oriented proramming is a way to program that is based on objects and classes while functional programming is more about creating logic through functions. From my understanding React is used as a functional programming framework, using functions and hooks. At Learn Academy, we primarily use the OOP style of programming with React, re-building the components into classes from their standard function component boilerplate.

     - Researched answer:
       > Object oriented programming is an imperative programming model versus functional programmings declarative programming model. OOP's focus on the four main features: abstraction, inheritance, polymorphism, and encapsulation.

4. What is the difference between a Float and an Integer in Ruby?
     - Your answer:
       > The difference between a float and an integer in Ruby is that the integer is a whole number and a float is a whole number followed by decimals. In Ruby when calculating mathematical problems whole numbers are the default and floats/decimals will only be returned if explicitly used or converted to. I found this out originally by trying to divide an odd integer by two, which surprising to me came back as a whole integer. This can easily be resolved by adding a float to an integer when floats may be a possibility, for example 
       ```javascript 
       3 / 2    // Output would be 1

       3.0 / 2  // Output would be 1.5
       ```

     - Researched answer:
       > In most calculations float is used since it's the most accurate way to store/calculate values. A decimal type in ruby is a third number based data type that is more accurate than a float, at the expense of space. While integers are perfect representatons of a whole number, floats are not a perfect decimal

5. Ruby has an implicit return. What does that mean?
     - Your answer:
       > Ruby's implicit return is how the language deals with information being processed from methods. Unlike some programming languages, Ruby always returns the last line of the method block that is processed. Ruby's implicit return makes writing methods easier in my opinion, since you always want information back from a method call, you always have data being returned, which assists in troubleshooting and reduced lines of code.

     - Researched answer:
       > The return in Ruby can still be used in methods but is recommended to allow the language to handle the return. Returns called explicitly can cause LocalJumpErrors, which can be due to being called outside of a method

## Looking Ahead: Terms for Next Week

1. Instance Variable:
    > Instance variables is a variable which is declared in a class but outside of constructors, methods, or blocks.
    
    > In Ruby instance variables are denoted by the @ symbol
      ```ruby
        class CoffeeMachine
          def initialize
            @water = 100 # <- Instance Variable
          end
        end
      ```
    > In JavaScript instance variables are just properties of an object
      ```javascript
        class Hello {
          constructor(name) {
            this.name = name  // <- Instance Variable
          }
          hello() {
            console.log(this.name)
          }
      ```

2. PostgreSQL:
    > Acording to their slogan, the worlds most advanced open source database. A powerfull open source, object-relational database system with over 30 years of active development. PostgreSQL's database management system supports foreign keys, subqueries, triggers and different user-defined types and functions.

3. Ruby on Rails:
    > Ruby on Rails is a server-side web application framework writen in Ruby. It's a model-view-controller framwework which provides database, web service, and web pages.

4. ORM:
    > ORM is short for Object-Relational Mapping which is a technique that lets you query and manipulate data from databases using the object oriented programming paradigm.

5. Active Record:
    > Active Record is the ORM layer supplied with Rails. It uses tables map to classes, rows map to objects and columns map to object attributes.It runs between the database and the codes logic. When changes are wanted to be changed in the database you write the changes then run 'migrations' which make the change to the actual database.
