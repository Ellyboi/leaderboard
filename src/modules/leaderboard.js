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

   display = async () => {
     const scoresList = document.querySelector('#scores__list');
     scoresList.innerHTML = '';
     try {
       this.leaders = await Api.get();
       // Sort the result desc
       this.leaders = this.leaders.sort((a, b) => b.score - a.score);
       this.leaders.forEach((leader) => {
         // New li
         const li = document.createElement('li');
         li.textContent = `${leader.user}:  ${leader.score}`;
         scoresList.appendChild(li);
       });
     } catch (error) {
       const li = document.createElement('li');
       li.textContent = 'Please, verify your network connection';
       scoresList.appendChild(li);
     }
   }
}