import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct{
    constructor(
        public name: string,
        public description: string,
        public image: string,
        public price: string,
        public weight: string,
        public id?: number
    ){}
}