// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//           return area;
//     }
    
//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }
    
//  }
 
//  const rect = new Rectangle(2, 4)
//  const area = rect.area();
//  console.log(area)

class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
}

const c=new circle(3)
console.log(c.area())