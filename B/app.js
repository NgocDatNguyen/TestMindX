function checkNumber() {
  let number = document.getElementsByClassName("ip1").value;
  if (number >= 1 && number <= 100) {
    let a = number(Math.floor(Math.random() * 100) + 1);
    if (number == a) {
      console.log("Trúng thưởng");
    } else {
      console.log(a);
    }
  } else {
    alert("Bạn đã nhập sai! Vui lòng nhập lại!");
  }
}
