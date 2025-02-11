import { IBuilder } from './IBuilder'

export class Director {
    private builder: IBuilder;

    public setBuilder(builder: IBuilder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePart_A();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePart_A();
        this.builder.producePart_B();
        this.builder.producePart_C();
    }
}
