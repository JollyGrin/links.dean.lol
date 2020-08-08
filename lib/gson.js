import fetch from 'axios';
// import mockData from './mockData.json';

export async function getData(sheetsURL) {
  const gson = `https://gson.now.sh?url=${sheetsURL}`;
  const grab = await fetch(gson);

  return grab.data;
  // return mockData;
}
