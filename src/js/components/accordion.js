export const accordion = (() => {
  const init = () => {
    const accordionList = document.querySelectorAll(".accordion-list");

    if (!accordionList.length) {
      return;
    }

    const toggleAccordion = (event) => {
      const accordionItem = event.target.closest(".accordion");
      const accordionBtn = accordionItem.querySelector('button');
      const accordionContent = accordionItem.querySelector(
        ".accordion__content"
      );
      accordionItem.classList.toggle("active");

      if (accordionItem.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionBtn.setAttribute('aria-expanded', true)
      } else {
        accordionContent.style.maxHeight = "0";
        accordionBtn.setAttribute('aria-expanded', false)
      }
    };

    accordionList.forEach((accordion) => {
      accordion.addEventListener("click", toggleAccordion);
    });
  };

  return {
    init,
  };
})();
