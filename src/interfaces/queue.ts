interface IQueue<T> {
    readonly size: number;

    get count(): number;

    get isEmpty(): boolean;
    get isFull(): boolean;

    enqueue(item: T): IQueue<T>;
    dequeue(): T | undefined;
    peek(): T | undefined;

    empty(): void;

    contains(item: T): boolean;
}

export default IQueue;