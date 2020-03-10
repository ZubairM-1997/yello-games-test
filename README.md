## Shapes Interaction Problem
An infinite 2D board contains a number of shapes. These shapes are either a Circle or Rectangle. Each shape has a unique Id. Write a function that takes a list of shapes and returns a dictionary of each shape id mapped to a list of the shapeids it itersects with.

## Thought Process
I opted to solve this issue by using Object-Oriented Programming, for this I created 3 classes
1) Rectangle class which has the constructor to instantiate a rectangle
2) Circle class which has the constructor to instantiate a circle
3) Plane which contains the business logic to find out the intersecting shapes

I realised that this would require composition rather than inheritance because of the relationship between the 2D Plane and the shapes, i.e: The Plane HAS Shapes which are either Rectangles or Circles

### Getting Started
1) Clone this repository
2) type the command "npm install" to install the dependancies
3) to run the program type "ts-node solution.ts"
4) On the terminal you will see the output!

### Credits
This project was written in TypeScript



