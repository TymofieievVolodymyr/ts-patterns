import { Director } from './Director'
import { CarBuilder } from './CarBuilder'


function clientCode(director: Director) {
    const builder = new CarBuilder();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    // Помните, что паттерн Строитель можно использовать без класса Директор.
    console.log('Custom product:');
    builder.producePart_A();
    builder.producePart_C();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
