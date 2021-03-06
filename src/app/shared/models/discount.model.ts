import { IDiscount } from "../interfaces/discount.interface";

export class Discount implements IDiscount{
    constructor(
        public name: string,
        public description: string,
        public image: string,
        public id?: number
    ){}
}