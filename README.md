## Shapes Interaction Problem
An infinite 2D board contains a number of shapes. These shapes are either a Circle or Rectangle. Each shape has a unique Id. Write a function that takes a list of shapes and returns a dictionary of each shape id mapped to a list of the shapeids it itersects with.

## Thought Process
I opted to solve this issue by using Object-Oriented Programming, for this I created 3 classes
1) Rectangle class which has the constructor to instantiate a rectangle
2) Circle class which has the constructor to instantiate a circle
3) Plane which contains the business logic to find out the intersecting shapes

I realised that this would require composition rather than inheritance because of the relationship between the 2D Plane and the shapes, i.e: The Plane HAS Shapes which are either Rectangles or Circles

The original question said that it is an infinite 2D board, however I found it easier to visualise in my head when I knew about the area and dimensions of the board, therefore The Plane constructor takes in 2 arguments, total area and dimensions(x,y), without it, the business logic of the code would still work after some minor refactoring

The Circle class takes in 3 arguments, which are shapeId, radius, coordinates (centre)

The Rectangle class takes in 6 arguments
1) shapeId
2) shapeLength - length of rectangle
3) width - width of rectangle
4) coordinates - represent the coordinates of the centre of the rectangle which is in an array
5) topLeft - represent the coordinates of the topLeft corner of rectangle which is in an array
6) bottomRight - represent the coordinates of the bottomRight corner of the rectangle which is in an array





### Getting Started
1) Clone this repository
2) type the command "npm install" to install the dependancies
3) to run the program type "ts-node solution.ts"
4) On the terminal you will see the output!

### Credits
This project was written in TypeScript



