let titleIndex = 0;
const titles = [
  'X5DFG.PY',
  'X5DFG.HTML',
  'X5DFG.CSS',
  'X5DFG.JS',
  'X5DFG.JRE',
  'X5DFG.CS',
  'X5DFG.PHP',
  'X5DFG.JSON',
  'X5DFG.SUS'
];

setInterval(() => {
  document.title = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}, 1000);
