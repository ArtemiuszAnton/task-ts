// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
// class Rectangle {
//     getArea(width: number, height: number) {
//         return width * height
//     }
// }
// const rectangle = new Rectangle();
// console.log(rectangle.getArea(100, 200));
// class Rectangle {
//     width: number;
//     height: number;
//     setWidth(width: number) {
//         this.width = width
//     }
//     setHeight(height: number) {
//         this.height = height
//     }
//     getArea() {
//         return this.width * this.height
//     }
// }
// const rectangle = new Rectangle();
// rectangle.setHeight(23);
// rectangle.setWidth(11);
// console.log(rectangle.getArea());
// class Rectangle {
//     width: number = 43;
//     height: number = 66;
//     getArea() {
//         return this.width * this.height
//     }
// }
// const rectangle = new Rectangle();
// console.log(rectangle.getArea());
class Rectangle {
    width;
    height;
    constructor(a, b) {
        this.width = a;
        this.height = b;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(32, 44);
console.log(rectangle.getArea());
