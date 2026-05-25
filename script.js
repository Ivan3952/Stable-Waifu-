document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener("click", function(event){
    var target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});

var cards = document.querySelectorAll(".feature-card, .artist-card, .step, .mock-panel");
var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
cards.forEach(function(card){
  card.classList.add("reveal");
  observer.observe(card);
});