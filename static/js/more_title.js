let titleIndex = 0;
const titles = ['x','x5','x5d','x5df','x5dfg','5dfg','dfg','fg','g'];

setInterval(() => {
  document.title = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}, 500);