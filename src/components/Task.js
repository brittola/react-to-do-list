class Task{

    static lastId = 0;

    constructor(text) {
        this.id = Task.lastId++;
        this.task = text;
        this.checked = false;
    }

}

export default Task;