import "reflect-metadata";
import { injectable } from "inversify";
import { Product } from "../models/Product";

type ProductsDto = { total_pages: number, data: Product[] };

export interface CatalogService {
    getById(id: number): Promise<Product>;
    getByPage(page: number): Promise<ProductsDto>;
}

const PAGE_SIZE = 2;

@injectable()
export default class DefaultUserService implements CatalogService {
    private _products: Product[] = [
        { id: 1, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/catalog/product/o/p/oppo-bacon-black-full_1_.jpg"},
        { id: 2, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/catalog/product/o/p/oppo-bacon-black-full_1_.jpg"},
        { id: 3, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/catalog/product/o/p/oppo-bacon-black-full_1_.jpg"},
    ]; 
    
    public async getById(id: number): Promise<Product> {
        const product = this._products.find(_ => _.id == id);
        if (!product) {
            throw new Error("Not found");
        }

        return product;
    }

    public async getByPage(page: number): Promise<ProductsDto> {
        const index = (page - 1) * PAGE_SIZE;
        return { 
            data: this._products.slice(index, index + PAGE_SIZE),
            total_pages: Math.ceil(this._products.length / PAGE_SIZE)
        }
    }
}
