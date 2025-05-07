class Counter {
  constructor() {
    if (!Counter.instance) {
      this.count = 0;
      Counter.instance = this;
    }
  }

  getCounter() {
    return this.count;
  }
  increment() {
    return ++this.count;
  }
  decrement() {
    return --this.count;
  }
}
const counter = Object.freeze(new Counter());

export default counter;
