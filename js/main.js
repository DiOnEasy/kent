const faqHeader = document.querySelectorAll(".faq__item-header");
const faqText = document.querySelectorAll(".faq__item-text");
const faqImg = document.querySelectorAll(".faq__item-header img");
const toggleShown = (index) => {
  faqText[index].classList.toggle("none");
  faqImg[index].classList.toggle("rotated");
};

faqHeader.forEach((item, index) => {
  item.onclick = () => toggleShown(index);
});
