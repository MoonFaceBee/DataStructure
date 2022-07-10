class Stack {
    //Array, Length, Last Index(top)
    private array: any[] = [];

    //Push to array
    push(newItem: any): any {
        this.array[this.array.length] = newItem

        return this
    }

    //Pop element
    pop(): any {
        const val = this.array.at(-1);
        this.array.length -= 1;
        return val;
    }

    //Get the value of last element
    peek(): any {
        return this.array.at(-1);
    }

    //Empty the array
    empty():any {
        this.array.length = 0
    }

    //Check if the element is empty
    get isEmpty(): boolean {
        return this.array.length === 0;
    }
}

export default Stack;