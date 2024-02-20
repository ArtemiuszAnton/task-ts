// 10. Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().


interface Products {
    price: number;
    title: string
}

class Product {
    product: Products[] = [
        { price: 12, title: 'prod1' },
        { price: 14, title: 'prod2' },
        { price: 4, title: 'prod3' },
        { price: 89, title: 'prod4' }
    ]

    displayProductInfo(): Products[] {
        const res = this.product.filter((el) => el.price > 20)
        return res
    }
}

const product = new Product();
console.log(product.displayProductInfo());

