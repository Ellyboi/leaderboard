const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nslYEPpt500fFqeTXs/scores/';

export default class Api {
  static async post(newPlayer) {
    const req = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayer),
    });
    return req.json();
  }

  static async get() {
    const req = await fetch(baseURL);
    const response = await req.json();
    return response.result;
  }
}
