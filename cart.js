const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}



const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [],
	add(product) {
		this.goods.push(product);
	},
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
		this.cartListBlock.textContent = '';
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();


const catalog = {
	list : [
		{
			id_product: 123,
			product_name: 'Ноутбук',
			price: 45600,
			quantity: 1,
		},
		{
			id_product: 456,
			product_name: 'Мышка',
			price: 1000,
			quantity: 2,
		},
		{
			id_product: 305,
			product_name: 'Клавиатура',
			price: 2000,
			quantity: 1,
		}
	],
	//генерируем HTML всех товаров
	generateHTML(){
		//
		let html = '';
		this.list.forEach( good => {
			html += this.render(good);
		});
		document.querySelector('.catalog').innerHTML = html;
		
		//навешиваем событие на кнопки купить
        document.querySelectorAll('.addToCart').forEach( function(value, idx, listObj) { 
			listObj[idx].addEventListener('click', function() {
				let id_product =  this.dataset.id;
				
				let product = catalog.list.filter(function(obj) {
					return (obj.id_product === parseInt(id_product));
				});
				if (product){
					cart.add(product[0]);
					cart.render();
				}
				
			});
		  }
		);		
	},
	
	//рисуем блок товара (именно товара для покупки)
	render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
					<div class="addToCart" data-id="${good.id_product}"><b>Купить</b></div>
                </div>`;
    }
}

catalog.generateHTML();
