interface Obj1 {
  prop1: number;
  prop2: string;
  prop3: string[];
  fn1: (arg1: number) => void;
}

class Base {
  prop1 = 1;
  prop2 = '1';
  prop3: string[] = [];
  key1: number;

  constructor(key1: number) {
    this.key1 = key1;
  }

  fn1(this: Obj1, a: number) {
    console.log(a);
    console.log(this);
  }
}

class Sub extends Base {
  prop1 = 23423;
  prop4 = {};

  key2: string;

  constructor(key1: number, key2: string) {
    super(key1);
    this.key2 = key2;
  }

  fn1(a: number) {
    console.log(a);
    console.log(this);
  }
}

const base = new Base(1);
const sub = new Sub(222, '234234');

console.log(base, sub);
