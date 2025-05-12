const agents = {
    'Jett': {
      role: 'Duelist',
      ability: 'Dash (Tailwind)',
      description: 'Jett is fast and agile. Perfect for flanking and escaping quickly.'
    },
    'Sova': {
      role: 'Initiator',
      ability: 'Recon Bolt',
      description: 'Sova locates and tracks enemies using his recon abilities.'
    },
    'Sage': {
      role: 'Sentinel',
      ability: 'Barrier Orb',
      description: 'Sage supports her team with healing and powerful wall control.'
    },
    'Brimstone': {
      role: 'Controller',
      ability: 'Sky Smoke',
      description: 'Brimstone controls space with precision smoke deployments.'
    }
};

function showInfo(name) {
    const agent = agents[name];
    const panel = document.getElementById('infoPanel');
    panel.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Role:</strong> ${agent.role}</p>
      <p><strong>Signature Ability:</strong> ${agent.ability}</p>
      <p>${agent.description}</p>
    `;
}