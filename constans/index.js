const colors = {
  Высокий: ['#cf403b', '#d32f2f', '#e53935', '#bf360c'],
  Средний: ['#ff9431', '#ff9800', '#ffc107', '#f9a825'],
  Низкий: ['#4f40f3', '#2196f3', '#03a9f4', '#3f51b5'],
};
// TODO:задать
const liveAccsesToken = 15;
const liveRefreshToken = 15;

function getColor(type) {
  let randomIndex = Math.round(Math.random() * colors[type].length);
  return colors[type][randomIndex];
}

module.exports = {
  getColor,
};
