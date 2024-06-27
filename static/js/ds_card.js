async function loadUserData() {
  try {
    const response = await fetch('https://discord.com/api/guilds/1160516320455036949/widget.json');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const widgetData = await response.json();
    const user = widgetData.members.find(member => member.username === '-_-');
    if (user) {
      createUserCard(user);
    } else {
      console.error('User not found');
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function createUserCard(user) {
  const card = document.getElementById('ds-card');
  let borderColor;

  switch (user.status) {
    case 'online':
      borderColor = '#48ff00';
      break;
    case 'idle':
      borderColor = '#ffbb00';
      break;
    case 'dnd': // Do Not Disturb
      borderColor = '#ff1f1f';
      break;
    case 'offline':
    default:
      borderColor = 'gray';
  }

  card.innerHTML = `
    <span>
      <img class="display-avatar" src="${user.avatar_url}?size=512" alt="Avatar" style="border-color: ${borderColor}; width: 128px;">
      <span class="username">${user.username}\`s <a class="user-link" target="_blank" href="https://discord.com/users/887724227871014912">profile</a> <img class="shields" src="https://api.statusbadges.me/badge/playing/887724227871014912" alt="playing"> <img class="shields" src="https://api.statusbadges.me/badge/vscode/887724227871014912" alt="vscode"></span>
    </span>
  `;
}

window.onload = loadUserData;


