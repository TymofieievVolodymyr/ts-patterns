import { DoublyEndedQueue } from "../Queues/DoublyEndedQueue/DoublyEndedQueue";

/**
 * A Last-in, First-out (LIFO) data container
 */
class Stack<T> {
    private doublyEndedQueue = new DoublyEndedQueue<T>();

    push(value: T): void {
        this.doublyEndedQueue.enqueueHead(value);
    }

    pop(): T {
        return this.doublyEndedQueue.dequeueHead();
    }

    peek(): T {
        let value: T;

        value = this.doublyEndedQueue.peekFirst();
        if (value) {
            return value;
        }

        throw new Error('Something is wrong');
    }

    getAmountOfItems(): number {
        return this.doublyEndedQueue.getAmountOfItems();
    }
}
