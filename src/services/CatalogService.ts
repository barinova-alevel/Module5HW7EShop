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
        {
            id: 1,
            name: "Oppo A53s",
            price: 7990,
            avatar: "https://content2.rozetka.com.ua/goods/images/big/31161253.jpg",
            description: `Экран (6.43", LCD, 1600x720) / Qualcomm Snapdragon 460 (1.8 ГГц + 1.6 ГГц) / тройная основная камера: 13 Мп + 2 Мп + 2 Мп, фронтальная 8 Мп / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD (до 256 ГБ) / 3G / LTE / GPS / поддержка 2х SIM-карт (Nano-SIM) / Android 10 / 5000 мА*ч`
        },
        {
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },{
            id: 2,
            name: "Apple iPhone 13 Pro",
            price: 38499,
            avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png",
            description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15`
        },
        // { id: 3, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        // { id: 4, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        // { id: 5, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        // { id: 6, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        // { id: 7, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        // { id: 8, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        // { id: 9, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        // { id: 10, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        // { id: 11, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        // { id: 12, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},
        // { id: 13, name: "Oppo A53s", price: 7990, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-xiaomi.png"},
        // { id: 14, name: "Apple iPhone 13 Pro", price: 38499, avatar: "https://cdn.comfy.ua/media/cms/cat_2/smartfony-apple.png"},
        // { id: 15, name: "Apple iPhone 11 64Gb Black", price: 17999, avatar: "https://cdn.comfy.ua/media/x/img/file_2.png"},

    ];

    public async getById(id: number): Promise<Product> {
        const product = this._products.find(_ => _.id == id);
        if (!product) {
            throw new Error("Not found");
        }

        return product;
    }


    public async getByIds(ids: number[]): Promise<Product[]> {
        return this._products.filter(_ => ~ids.indexOf(_.id))
    }

    public async getByPage(page: number): Promise<ProductsDto> {
        const index = (page - 1) * PAGE_SIZE;
        return {
            data: this._products.slice(index, index + PAGE_SIZE),
            total_pages: Math.ceil(this._products.length / PAGE_SIZE)
        }
    }
}
