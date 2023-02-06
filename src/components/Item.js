class Item{
    // static lastId = 0;
    constructor(text){
        // this.id = Item.lastId++;
        this.id = Math.random();
        this.text = text;
        this.done = false;
    }
}

export default Item;