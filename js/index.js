var arrNumber = [];
document.querySelector("#array").innerHTML = arrNumber;
function hanldeAdd() {
  var number = +document.querySelector("#themso").value;
  arrNumber.push(number);
  document.querySelector("#array").innerHTML = arrNumber;
}
document.querySelector("#hanldeAdd").onclick = function () {
  hanldeAdd();
};
// Bài 1
function hanldeTongDuong() {
  var tong = 0;

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tong += arrNumber[i];
    }
  }
  return tong;
}
document.querySelector("#hanldeTongDuong").onclick = function () {
  document.querySelector(".result1").innerHTML = hanldeTongDuong();
};
// Bài 2
function hanldeCount() {
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      count += 1;
    }
  }
  return count;
}
document.querySelector("#hanldeCount").onclick = function () {
  document.querySelector(".result2").innerHTML = hanldeCount();
};
// Bài 3
function hanldeMin() {
  var min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  return min;
}
document.querySelector("#hanldeMin").onclick = function () {
  document.querySelector(".result3").innerHTML = hanldeMin();
};
// Bài 4
function hanldeMinDuong() {
  var min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min && arrNumber[i] > 0) {
      min = arrNumber[i];
    }
  }
  return min;
}
document.querySelector("#hanldeMinDuong").onclick = function () {
  document.querySelector(".result4").innerHTML = hanldeMinDuong();
};
// Bài 5
function hanldeChanCuoi() {
  var chan = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      chan = arrNumber[i];
    }
  }
  return chan;
}
document.querySelector("#hanldeChanCuoi").onclick = function () {
  document.querySelector(".result5").innerHTML = hanldeChanCuoi();
};
// Bài 6

function hanldeSwap(index1, index2) {
  var index1 = +document.querySelector("#index1").value;
  var index2 = +document.querySelector("#index2").value;

  if (
    index1 < 0 ||
    index1 >= arrNumber.length ||
    index2 < 0 ||
    index2 >= arrNumber.length
  ) {
    alert("Vị trí không hợp lệ.");
    return;
  }

  var temp = arrNumber[index1];
  arrNumber[index1] = arrNumber[index2];
  arrNumber[index2] = temp;

  return arrNumber;
}

document.querySelector("#hanldeSwap").onclick = function () {
  var index1 = parseInt(document.querySelector("#index1").value);
  var index2 = parseInt(document.querySelector("#index2").value);

  document.querySelector(".result6").innerHTML = hanldeSwap(index1, index2);
};

// Bài 7
document.querySelector("#hanldeSort").onclick = function () {
  arrNumber.sort(function (a, b) {
    return a - b;
  });
  document.querySelector(".result7").innerHTML = arrNumber;
};
// Bài 8
function checkSoNguyen(num) {
  return Number.isInteger(num);
}

function hanldeNguyen(arrNumber) {
  if (!Array.isArray(arrNumber)) {
    return -1;
  }

  var nguyen = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (!checkSoNguyen(arrNumber[i])) {
      continue;
    }
    var check = true;
    if (arrNumber[i] <= 1) {
      continue;
    }
    for (var j = 2; j <= Math.sqrt(arrNumber[i]); j++) {
      if (arrNumber[i] % j === 0) {
        check = false;
        break;
      }
    }
    if (check) {
      nguyen = arrNumber[i];
      break;
    }
  }
  return nguyen;
}
document.querySelector("#hanldeNguyen").onclick = function () {
  document.querySelector(".result8").innerHTML = hanldeNguyen(arrNumber);
};
// Bài 9
function hanldeDemSoNguyen() {
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (!checkSoNguyen(arrNumber[i])) {
      continue;
    }
    if (arrNumber[i] > 0) {
      count += 1;
    }
  }
  return count;
}

document.querySelector("#hanldeDemSoNguyen").onclick = function () {
  document.querySelector(".result9").innerHTML = hanldeDemSoNguyen();
};

// Bài 10
function hanldeSoSanh() {
  var countDuong = 0;
  var countAm = 0;
  var ketqua = "";
  for (var i = 0; i < arrNumber.length; i++) {
    if (!checkSoNguyen(arrNumber[i])) {
      continue;
    }
    if (arrNumber[i] > 0) {
      countDuong += 1;
    }
    if (arrNumber[i] < 0) {
      countAm += 1;
    }
  }
  if (countDuong > countAm) {
    ketqua = `Số lượng số nguyên dương: ${countDuong} > Số Lượng số nguyên âm: ${countAm}`;
  } else {
    ketqua = `Số lượng số nguyên dương: ${countDuong} < Số Lượng số nguyên âm: ${countAm}`;
  }
  return ketqua;
}
document.querySelector("#hanldeSoSanh").onclick = function () {
  document.querySelector(".result10").innerHTML = hanldeSoSanh();
};
