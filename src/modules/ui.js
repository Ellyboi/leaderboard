import Leaderboard from './leaderboard.js';

const myLeaderBoard = new Leaderboard();

const manageUI = () => {
  const form = document.querySelector('#form');
  const scoresList = document.querySelector('#scores__list');
  const message = document.querySelector('#message');
  const Refresh = document.querySelector('#Refresh');

  Refresh.addEventListener('click', () => {
    myLeaderBoard.display();
  });

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const name = document.querySelector('#name');
    const scoreInput = document.querySelector('#score');
    const user = name.value;
    const score = scoreInput.value;
    if (user.trim().length > 0 && score > 0) {
      try {
        const resp = await Leaderboard.addScore(user, score);
        // New li
        const li = document.createElement('li');
        li.innerHTML = `
        <article class="user">
              <span>?</span>
              <span class="material-symbols-outlined">
                person
              </span> <span>${user}</span>
            </article>
            <span class="score">${parseInt(score, 10).toLocaleString('en-US')}</span>`;
        li.classList.add('score__card');
        li.classList.add('new');
        scoresList.appendChild(li);
        // TEST
        scoresList.scrollBy(0, 2000);
        // Reset the form
        form.reset();
        message.innerHTML = `${resp.result}.`;
        setTimeout(() => {
          message.innerHTML = '';
        }, 3000);
      } catch (error) {
        message.innerHTML = 'Please verify your network connection.';
      }
    }
  });
};

export default manageUI;
