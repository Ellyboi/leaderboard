import Api from './api.js';
import Player from './player.js';

export default class Leaderboard {
  constructor() {
    this.leaders = [];
  }

  static async addScore(user, score) {
    const newPlayer = new Player(user, score);
    const response = await Api.post(newPlayer);
    return response;
  }

  async display() {
    const scoresList = document.querySelector('#scores__list');
    const loader = document.querySelector('#loading');
    scoresList.innerHTML = '';
    loader.classList.add('display');
    try {
      this.leaders = await Api.get();
      // Sort the result desc
      this.leaders = this.leaders.sort((a, b) => b.score - a.score);
      loader.classList.remove('display');
      this.leaders.forEach((leader, position) => {
        const score = +leader.score;
        // New li
        const li = document.createElement('li');
        li.classList.add('score__card');
        li.innerHTML = `
        <article class="user">
              <span>${position + 1}</span>
              <span class="material-symbols-outlined">
                person
              </span> <span>${leader.user}</span>
            </article>
            <span class="score">${score.toFixed(0)}</span>`;
        scoresList.appendChild(li);
      });
    } catch (error) {
      const li = document.createElement('li');
      li.textContent = 'Please, verify your network connection';
      scoresList.appendChild(li);
    }
  }
}
