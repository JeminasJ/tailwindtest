document.getElementById("header__search").onfocus = function () {
  document.getElementById("header__searchList").classList.remove("hidden");
};
document.getElementById("header__search").oninput = function () {
  document.getElementById("header__detailList").classList.remove("hidden");
  document.getElementById("header__searchList").classList.add("hidden");
};
document.getElementById("header__search").onblur = function () {
  document.getElementById("header__searchList").classList.add("hidden");
  document.getElementById("header__detailList").classList.add("hidden");
};
