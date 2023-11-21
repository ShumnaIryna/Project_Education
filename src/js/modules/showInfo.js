export default class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  init() {
      this.btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          try {
            const sibling =
              btn.closest(".module__info-show").nextElementSibling;

            //when we click the btns a second time, the text is hidden
            sibling.classList.toggle("msg");
            sibling.style.marginTop = "20px";
          } catch (e) {}
        });
      });
  }
}
