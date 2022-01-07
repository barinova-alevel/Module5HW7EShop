import { injectable } from "inversify";
import { action, makeObservable } from "mobx";
import { Product } from "../models/Product";

interface BasketItem {
    product: Product;
    count: number;
}

@injectable()
export default class BasketStore {
    basket: BasketItem[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    public addToBasket = (product: Product) => {
        const basketItem = this.basket.find(_ => _.product.id == product.id)
        if (basketItem == null) {
            this.basket.push({ product: product, count: 1 })
        } else {
            basketItem.count += 1
        };
        product.isInBasket = true;
    }

    public getTotalCount = () => this.basket.reduce((c, i) => c + i.count, 0 )

    public getTotalPrice = () => this.basket.reduce((c, i) => c + i.product.price, 0 )
}