

//created a class for a Circle with relevant attributes
class Circle {
	area = 0;

	constructor(public shapeId: number, public radius: number, public coordinates: number[]){
		this.shapeId = shapeId;
		this.radius = radius;
		this.area = Math.floor(Math.PI * (radius * radius))
		this.coordinates = coordinates;

	}
}


// created a class for Rectangle with relevant attributes
class Rectangle {
	area = 0;

	constructor(public shapeId: number, public shapeLength: number, public width: number, public coordinates: number[], public topLeft: number[], public bottomRight: number[]){
		this.shapeId = shapeId;
		this.shapeLength = shapeLength;
		this.width = width;
		this.area = (shapeLength * width)
		this.coordinates = coordinates;
		this.topLeft = topLeft
		this.bottomRight = bottomRight

	}

}



class Plane {
	shapes = []
	intersections = []
	//constructor to generate 2D plane which shapes are put on
	constructor(public area: number, public coordinates: number[]){
		this.area = area
		this.coordinates = coordinates;
	}


	//method to create and store a circle
	addCircle(shapeId: number, radius: number, coordinates: number[]){
		let newCircle = new Circle(shapeId, radius, coordinates)
		if (newCircle.area > this.area){
			return Error("The circle cannot have an area larger than the 2D plane itself")
		}else if (newCircle.coordinates[0] > this.coordinates[0] || newCircle.coordinates[1] > this.coordinates[1]){
			return Error("The circle cannot be out of bounds")
		} else {
			this.shapes.push(newCircle)
		}
	}

	//method to create and store a Rectangle
	addRectangle(shapeId: number, shapeLength: number, width: number, coordinates: number[], topLeft: number[], bottomRight: number[]){
		if (shapeLength === width){
			return Error("You made a square not a rectangle!")
		}

		let newRectangle = new Rectangle(shapeId, shapeLength, width, coordinates, topLeft, bottomRight)
		if (newRectangle.area > this.area){
			return Error("The rectangle cannot have an area larger than the 2D plane itself")
		} else if 	(newRectangle.coordinates[0] > this.coordinates[0] || newRectangle.coordinates[1] > this.coordinates[1]){
						return new Error("The rectangle cannot be out of bounds")
		} else {
			this.shapes.push(newRectangle)
		}
	}




	findIntersections(){
		//returns null if shapes array has nothing in it
		if (this.shapes.length === 0){
			return null

		//returns a single object with no intersections if only 1 is in the shapes array
		} else if (this.shapes.length === 1){
			let onlyShape = this.shapes[0]
			return {
				shapeId: onlyShape.shapeId,
				intersectedIds: null
			}

		} else {
			//iterate through the shapes array
			this.shapes.forEach(shape => {

				//for each iteration, an object is created
				let intersectionObj = {
					shapeId: shape.shapeId,
					intersectedShapes: []
				}

				//filtered through the shapes array to return an array which do not have the current shape in iteration
				let filteredArray = this.shapes.filter(filteredShape => filteredShape !== shape)

								//iterate through the filtered array which compare the current shape within the main shapes array and the current object within the filtered array
								filteredArray.forEach(filteredShape => {

									if(shape instanceof Circle && filteredShape instanceof Rectangle){

										let distX = Math.abs(shape.coordinates[0] - filteredShape.coordinates[0] - filteredShape.width / 2)
										let distY = Math.abs(shape.coordinates[1] - filteredShape.coordinates[1] - filteredShape.shapeLength / 2)

										if (distX <= (filteredShape.width / 2) || distY <= (filteredShape.shapeLength / 2)){
											intersectionObj.intersectedShapes.push(filteredShape.shapeId)
										} else {
											console.log("No intersection")
										}


									}else if (shape instanceof Circle && filteredShape instanceof Circle){

										let r0 = shape.radius
										let r1 = filteredShape.radius

										let x0 = shape.coordinates[0]
										let y0 = shape.coordinates[1]

										let x1 = filteredShape.coordinates[0]
										let y1 = filteredShape.coordinates[1]

										let dx = x1 - x0
										let dy = y1 - y0
										//finds the distance between the centre points of a circle
										let d = Math.sqrt( dx*dx + dy*dy );

										// if d is less than the sum of the radii then circles intersect
										if(d < (r0 + r1)){
											intersectionObj.intersectedShapes.push(filteredShape.shapeId)
										}else {
											console.log("No intersection")
										}

									}else if (shape instanceof Rectangle && filteredShape instanceof Circle){
										let distX = Math.abs(filteredShape.coordinates[0] - shape.coordinates[0] - shape.width / 2)
										let distY = Math.abs(filteredShape.coordinates[1] - shape.coordinates[1] - shape.shapeLength / 2)

										if (distX <= (shape.width / 2) || distY <= (shape.shapeLength / 2)){
											intersectionObj.intersectedShapes.push(filteredShape.shapeId)
										}

									} else if (shape instanceof Rectangle && filteredShape instanceof Rectangle){

										//checks if one rectangle is on the left side of the other
										if(shape.topLeft[0] > filteredShape.bottomRight[0] || filteredShape.topLeft[0] > shape.bottomRight[0]){
											console.log("No intersection")
										}

										//checks if one rectangle is above the other
										if (shape.topLeft[1] < filteredShape.bottomRight[1] || filteredShape.topLeft[1] < shape.bottomRight[1]){
											console.log("No intersection")
										}

										intersectionObj.intersectedShapes.push(filteredShape.shapeId)

									}

								})

								this.intersections.push(intersectionObj)


			})

			console.log(this.intersections)
			return this.intersections;
		}



	}

}


let newGrid = new Plane(10000, [100, 100])
newGrid.addCircle(1, 3, [23, 34])
newGrid.addCircle(2, 5, [23, 44])

newGrid.addRectangle(3, 5, 3, [44, 33], [27, 36], [44, 28])
newGrid.findIntersections()

