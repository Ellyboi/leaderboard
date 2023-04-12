import Player from './player.js';

export default class Leaderboard {
  constructor() {
    this.leaders = [];
  }

  addScore(user, score) {
    const newPlayer = new Player(user, score);
    this.leaders.push(newPlayer);
  }

  display() {
    const scoresList = document.querySelector('#scores__list');
    scoresList.innerHTML = '';
    // Sort the result desc
    this.leaders = this.leaders.sort((a, b) => b.score - a.score);
    this.leaders.forEach((leader) => {
      // New li
      const li = document.createElement('li');
      li.textContent = `${leader.user}  ${leader.score}`;
      scoresList.appendChild(li);
    });
  }
}
