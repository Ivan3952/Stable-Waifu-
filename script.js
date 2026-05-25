document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(event) {
    var target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

var items = document.querySelectorAll(".news-card");

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach(function(item) {
  item.classList.add("reveal");
  observer.observe(item);
});
