function getElement (selection){
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(`Please check "${selection}" selector, no such element exists`);
}

class Counter {
    constructor(element,value){
        this.counter = element;
        this.value = value;
        this.resetBtn = this.counter.querySelector('.reset');
        this.increaseBtn = this.counter.querySelector('.increase');
        this.decreaseBtn = this.counter.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value')
        this.valueDOM.textContent = this.value;
        
        //bind 'this' to all functions
        this.increase = this.increase.bind(this);
        this.reset = this.reset.bind(this);
        this.decrease = this.decrease.bind(this);
        
        //Event Listeners
        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
        this.value = value;
    }
    increase(){
        this.value++;
        this.valueDOM.textContent = this.value
    }
    decrease(){
        this.value--;
        this.valueDOM.textContent = this.value
    }
    reset(){
        this.value = 0;
        this.valueDOM.textContent = this.value
    }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);