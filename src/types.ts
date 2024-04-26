interface ToDoItem {
    getId(): number,
    getText(): string,
    setText(text: string): void,
}

class ToDoItemImpl implements ToDoItem {

    private id: number = Math.random();
    private text: string = '';

    constructor(text: string) {
        this.setText(text);
    }

    getId(): number {
        return this.id;
    }

    getText(): string {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    static fromJSON(d: Object): ToDoItemImpl {
        return Object.assign(new ToDoItemImpl(''), d);
    }
}

export type { ToDoItem };
export { ToDoItemImpl };