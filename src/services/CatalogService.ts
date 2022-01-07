import "reflect-metadata";
import { injectable } from "inversify";
import { Product } from "../models/Product";

type ProductsDto = { total_pages: number, data: Product[] };

export interface CatalogService {
    getById(id: number): Promise<Product>;
    getByPage(page: number): Promise<ProductsDto>;
}

const PAGE_SIZE = 12;

@injectable()
export default class DefaultUserService implements CatalogService {
    private _products: Product[] = [
        { id: 1, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        { id: 2, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        { id: 3, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        { id: 4, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        { id: 5, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        { id: 6, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        { id: 7, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        { id: 8, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        { id: 9, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        { id: 10, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        { id: 11, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        { id: 12, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        { id: 13, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        { id: 14, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        { id: 1, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
    
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
