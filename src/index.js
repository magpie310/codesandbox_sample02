import "./styles.css";
// 追加ボタンクリック
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // li タグ
  const li = document.createElement("li");
  li.innerText = inputText;

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
  // alert(inputText);

  // ボタン(完了)を作成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // ボタン(削除)を作成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
