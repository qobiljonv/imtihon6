const itemLists = document.querySelectorAll(".item-list");

itemLists.forEach((item) => {
  const itemBtn = item.querySelector(".item-btn");
  const dessertBtnAdd = item.querySelector(".dessert-btn-add");

  const plusBtn = item.querySelector(".btn-add-amount");
  const minusBtn = item.querySelector(".btn-remove-amount");
  const amountSpan = item.querySelector(".amount");

  let count = 0;

  itemBtn.addEventListener("click", () => {
    count = 1;
    amountSpan.textContent = count;
    itemBtn.classList.add("hidden");
    dessertBtnAdd.classList.remove("hidden");
  });

  plusBtn.addEventListener("click", () => {
    count++;
    amountSpan.textContent = count;
  });

  minusBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      amountSpan.textContent = count;
    } else {
      count = 0;
      amountSpan.textContent = count;
      dessertBtnAdd.classList.add("hidden");
      itemBtn.classList.remove("hidden");
    }
  });
});
