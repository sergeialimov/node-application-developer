function fn() {
  console.log(this.id)
};
const onj = { id: 99 };
const obj2 = { id: 2 };
// fn.call(obj2);
// fn(obj2);

function fn2() {
  return (offset) => {
    return (offset2) => {
      console.log(this.id, offset, offset2);
    }
  }
}

fn2.call({ id: 3 })(1)(2)


function normalFunction() {

}

const fatArrow = () => {

}

console.log('-- -- -- normal fun', typeof normalFunction.prototype);
console.log('-- -- -- fat fun', typeof fatArrow.prototype);