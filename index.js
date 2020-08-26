/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("h1#header");
  console.log("Here's your header:", header);



/***** Deliverable 2 *****/
  header.style.color = "red"; 

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
  let playerContainer = document.getElementsByClassName('player-container')[0]
  let i = 0;
  while (i < PLAYERS.length) {
    let playerDiv = document.createElement('div');
    console.log(playerDiv);
    playerDiv.className = 'player'
    playerDiv.setAttribute('data-number', PLAYERS[i].number)

    let playerInfo = `
        <h3>${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)</h3> 
        <img src="${PLAYERS[i].photo}">
        `
    
    playerDiv.innerHTML = playerInfo
    playerContainer.append(playerDiv)
    i++;
  }
/***** Deliverable 4 *****/
  const raheem = document.querySelector('[data-number="7"]')
  raheem.remove()
});