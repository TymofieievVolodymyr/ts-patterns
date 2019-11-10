import {IProduct} from './IProduct'
import {Creator} from './Creator'


class ConcreteCreator1 extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProduct2();
    }
}


class ConcreteProduct1 implements IProduct {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements IProduct {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}


function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
