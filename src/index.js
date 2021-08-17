import "./styles.css";

// /**
//  * const let変数宣言
//  */
// var val1 = "あれれ";
// console.log(val1);
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// console.log(val4);
// val4.addres = "Hiroshima";

// /**
//  * テンプレート文字列
//  */
// const name = "じゃけえ";
// const age = 28;
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の関数　リテラル
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数1
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// // アロー関数2
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };
// const message9 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message9);
// const { name10, age10 } = myProfile;
// const message10 = `名前は${name10}です。年齢は${age10}です。`;
// console.log(message10);
// // 配列ぽく
// const myProfile11 = ["じゃけえ", 28];
// const message11 = `名前は${myProfile11[0]}です。年齢は${myProfile11[1]}です。`;
// console.log(message11);

// /**
//  * デフォルト価
//  *
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello("たなか");

// /**
//  * スプレッド構文
//  */
// // スプレッドの参照
// const arr1 = [1, 2];
// console.log(arr1); // [1,2]と出力される
// console.log(...arr1); //1,2 と出力される。配列が列挙される
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // スプレッドの代入
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...ar3] = arr2; //スプレッドの代入
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(ar3); // [3,4,5]

// // 配列の値のコピー、結合　もし、＝で代入すると、参照がわたっちゃう
// const arr12 = [10, 20];
// const arr13 = [30, 40];

// // arr12の値をarr14へコピー
// const arr14 = [...arr12];
// console.log(arr14);
// // arr12 arr13 をarr15へ連結
// const arr15 = [...arr12, ...arr13];
// console.log(arr15);

/**
 * mapやfilter
 */
const nameArr = ["田中", "さいとう", "高木", "じゃけえ"];
// 普通のfor
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

// mapで書く
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// mapのアロー関数でブラケットを省略してかいたら
nameArr.map((name) => console.log(name));

nameArr.map((name, i) => console.log(`${i} 番目は${name}desu`));

// 奇数だけ抽出するfilter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// mapでながめの処理がある場合
const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
