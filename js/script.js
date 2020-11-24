
window.addEventListener('scroll', function(e) {
  console.log(document.documentElement.scrollTop);
});

var panes = Array.from(document.getElementsByClassName('pane'));
console.log(panes);
panes = panes.filter( (e) => e.id != 'splash' );
console.log(panes);
panes.forEach((e, i) => {
  Array.from(e.children).forEach((c, j) => {
    // c.classList.add('unshown');
  });
});
