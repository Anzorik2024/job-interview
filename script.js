document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Закрываем все открытые блоки
      document
        .querySelectorAll(".accordion-content.active")
        .forEach((active) => {
          if (active !== content) {
            active.classList.remove("active");
          }
        });

      // Переключаем текущий блок
      content.classList.toggle("active");
    });
  });
});
