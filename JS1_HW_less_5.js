'use strict';

//  Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// 4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1. Создать массив товаров (сущность Product);
// 4.2. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода.
// Весь вид каталога генерируется JS

let cart = {
        products: [],
        add(product) {
            this.products.push(product);
        },
        count(){
            return this.products.length;
        },
        sum() {
            let sum = 0;
            for (let index in this.products) {
                sum += this.products[index].price * this.products[index].count;
            }
            return sum;

        }
    }

    function Product(make, model, price, count) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.count = count;
    }

    // let guitar = new Product('Jackson', 'SoloistPro', 1800, 9);
    // cart.add(guitar);
    //
     cart.add(new Product('Fender', 'Strat', 1200, 4));
     cart.add(new Product('Gibson', 'Les Paul', 1600, 2));
     cart.add( new Product('Jackson', 'SoloistPro', 1800, 9));
    console.log(cart);
    console.log(cart.sum());

 let myDiv = document.createElement('div');

 let carSum = cart.sum();
 if (carSum === 0){
     myDiv.innerText = 'Корзина пуста';
 }
 else  myDiv.innerText = 'Наполненная корзина имеет товары на сумму:  ' + cart.sum()+' рублей'+' в количестве: '+ cart.count();
 document.querySelector('body').appendChild(myDiv);


