import { MyClass } from "./myModule";

const btn = document.getElementById("on");
btn.addEventListener("click", () => {
  // console.log('on');
  const myObject = new MyClass();
  myObject.myMethod();
});
