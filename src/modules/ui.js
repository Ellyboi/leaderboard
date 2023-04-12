import Leaderboard from './leaderboard.js';

const myLeaderBoard = new Leaderboard();

const manageUI = () => {
  myLeaderBoard.display();
  const form = document.querySelector('#form');
  const scoresList = document.querySelector('#scores__list');
  const Refresh = document.querySelector('#Refresh');
  Refresh.addEventListener('click', () => {
    myLeaderBoard.display();
  });

  form.addEventListener('click', (ev) => {
    ev.preventDefault();
    const name = document.querySelector('#name');
    const scoreInput = document.querySelector('#score');
    const user = name.value;
    const score = scoreInput.value;
    if (user.trim().length > 0 && score > 0) {
      // New li
      const li = document.createElement('li');
      li.textContent = `${user}  ${score}`;
      li.classList.add('new');
      scoresList.appendChild(li);
      myLeaderBoard.addScore(user, score);
      // Reset the form
      form.reset();
    }
  });
};

export default manageUI;
