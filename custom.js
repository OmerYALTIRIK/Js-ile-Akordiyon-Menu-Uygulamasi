var buton = document.getElementsByClassName("akordiyon");
var ok = document.getElementsByClassName("fa-arrow-circle-down");

for (var i = 0; i < buton.length; i++) {
  buton[i].onclick = function () {
    var panel = this.nextElementSibling;
    // this.lastElementChild.classList.toggle("fa-arrow-circle-up");
    if (
      panel.style.maxHeight &&
      (this.lastElementChild.classList.contains("fa-arrow-circle-down") ||
        this.lastElementChild.classList.contains("fa-arrow-circle-up"))
    ) {
      panel.style.maxHeight = null;
      this.lastElementChild.classList.remove("fa-arrow-circle-up");
      this.lastElementChild.classList.add("fa-arrow-circle-down");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.lastElementChild.classList.remove("fa-arrow-circle-down");
      this.lastElementChild.classList.add("fa-arrow-circle-up");
    }
  };
}
