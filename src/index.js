import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); //store에 변화가 있을 때마다 감해서 불려질 거다

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
//html에게 뭔가각 바뀌었다고 알려주기 위해 함수를 쓴다는 것 자체가. 리덕스가 멋진 이유 중 하나다
/**
 * store는 data를 넣는 곳이다
 * store가 하는 일은 기본적으로 너의 data를 넣을 수 있는 장소를 생성한다.
 * 리덕스는 너의 data를 (관리하는데) 도와주는 역할을 하기 위해 만들어졌다.
 * 리듀서는 함수고 데이터를 수정해준다
 */
