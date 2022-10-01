"use strict";

// ============================= Phần SIDE
const news = document.querySelectorAll(".news");

news.forEach((dropdown) => {
  const title = dropdown.querySelector(".news-title");
  const content = dropdown.querySelector(".news-content");
  const caret = dropdown.querySelector(".caret");
  const icons = dropdown.querySelector(".icons");

  title.addEventListener("click", () => {
    content.classList.toggle("news-content-open");
    caret.classList.toggle("right");
    caret.classList.toggle("down");
    icons.classList.toggle("icons-active");
    title.classList.toggle("active");
  });
});

// hàm kéo thả
function handleClickNews() {
  $(".news").draggable();
}

// Bắt sự kiện hàm kéo thả vào các news
$("body").on("mouseover", handleClickNews);

// ========================  Validation Phần Nhập Liệu
const maso = document.getElementById("mssv");
const ten = document.getElementById("name");
const dchi = document.getElementById("add");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const nam = document.getElementById("male");
const nu = document.getElementById("female");
const dangky = document.getElementById("btn-dangky");
const xoa = document.getElementById("btn-xoahet");

function FormValidate() {
  let error = 0;
  let regexMaSo = /(17|18|19|20|21|22)+([0-9]{6})\b/g;
  let regexTen = /^[a-zA-Z0-9_-](\w|\s){1,}$/gm;
  let regexDiaChi = /^[a-z0-9_-](\w|\s){1,}$/gm;
  let regexPhone = /(0)+([0-9]{9})\b/g;
  let regexEmail =
    /^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;

  // kiểm tra mã số
  if (maso.value == "" || maso.value == null) {
    maso.classList.add("error");
    error += 1;
  } else if (!regexMaSo.test(maso.value)) {
    maso.classList.add("error");
    error += 1;
  } else {
    maso.classList.remove("error");
  }
  // Kiểm tra tên
  if (ten.value == "" || ten.value == null) {
    ten.classList.add("error");
    error += 1;
  } else if (!regexTen.test(ten.value)) {
    ten.classList.add("error");
    error += 1;
  } else {
    ten.classList.remove("error");
  }
  // Kiểm tra địa chỉ
  if (dchi.value == "" || dchi.value == null) {
    dchi.classList.add("error");
    error += 1;
  } else if (!regexDiaChi.test(dchi.value)) {
    dchi.classList.add("error");
    error += 1;
  } else {
    dchi.classList.remove("error");
  }
  // Kiểm tra điện thoại
  if (phone.value == "" || phone.value == null) {
    phone.classList.add("error");
    error += 1;
  } else if (!regexPhone.test(phone.value)) {
    phone.classList.add("error");
    error += 1;
  } else {
    phone.classList.remove("error");
  }

  // Kiểm tra Giới Tính

  if (
    (nam.checked == "" || nam.checked == null) &&
    (nu.checked == "" || nu.checked == null)
  ) {
    alert("Vui lòng chọn giới tính ! ");
    error += 1;
  }
  // Kiểm tra ngày
  if (date.value == "" || date.value == null) {
    date.classList.add("error");
    error += 1;
  } else {
    date.classList.remove("error");
  }
  // Kiểm tra email
  if (email.value == "" || email.value == null) {
    email.classList.add("error");
    error += 1;
  } else if (!regexEmail.test(email.value)) {
    email.classList.add("error");
    error += 1;
  } else {
    email.classList.remove("error");
  }
  return error;
}

dangky.addEventListener("click", function () {
  FormValidate();
  let check = FormValidate();
  if (check == 0) {
    $("table").append(
      `<tr><td>${maso.value}</td><td>${ten.value}</td><td>${
        nam.checked ? "Nam" : "Nữ"
      }</td><td>${date.value}</td></tr>`
    );
  }
});

xoa.addEventListener("click", function () {
  maso.value = "";
  ten.value = "";
  dchi.value = "";
  phone.value = "";
  nam.checked = false;
  nu.checked = false;
  date.value = "";
  email.value = "";
  email.classList.remove("error");
  date.classList.remove("error");
  phone.classList.remove("error");
  dchi.classList.remove("error");
  ten.classList.remove("error");
  maso.classList.remove("error");
});

// ======================== Phần MAIN Môn học

$(document).ready(function () {
  $("#nut1").click(function () {
    $("#courses-right").append("<div>Lập Trình Hướng Đối Tượng</div>");
  });
  $("#nut2").click(function () {
    $("#courses-right").append("<div>Lập Trình Hướng Đối Tượng</div>");
    $("#courses-right").append("<div>Cấu Trúc Dữ Liệu</div>");
    $("#courses-right").append("<div>Lập Trình Windows</div>");
    $("#courses-right").append("<div>NM Công Nghệ Phần Mềm</div>");
    $("#courses-right").append("<div>Trí Tuệ Nhân Tạo</div>");
    $("#courses-right").append("<div>Phát Triển Ứng Dụng Web</div>");
    $("#courses-right").append("<div>Cơ Sở Dữ Liệu</div>");
    $("#courses-left").empty();
  });
  $("#nut3").click(function () {
    $("#courses-left").append("<div>Nhập Môn Lập Trình</div>");
  });
  $("#nut4").click(function () {
    $("#courses-left").append("<div>Nhập Môn Lập Trình</div>");
    $("#courses-left").append("<div>Kỹ Thuật Lập Trình</div>");
    $("#courses-left").append("<div>Lập Trình Ứng Dụng Java</div>");
    $("#courses-right").empty();
  });
});

// Hàm kéo thả
function handleClickMonHoc() {
  $(".sub").draggable();
}
// Bắt sự kiện hàm kéo thả vào các môn học
$("body").on("mouseover", handleClickMonHoc);
