!function(){var e=document.querySelector(".modal-open"),t=document.querySelector(".modal-dev__box "),c=document.querySelectorAll(".footer__btn"),o=document.querySelector(".modal-close");c.forEach((function(c){c.addEventListener("click",(function(c){c.preventDefault(),e.classList.add("active"),t.classList.add("active")}))})),o.addEventListener("click",(function(){e.classList.remove("active"),t.classList.remove("active")})),document.addEventListener("click",(function(c){c.target===e&&(e.classList.remove("active"),t.classList.remove("active"))}))}();
//# sourceMappingURL=library.d9ccc231.js.map
