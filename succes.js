export let succesDebloques = [];

const succesDefinitions = {
  "play": { nom: "Jouer", couleur: "bronze" },
  "10pieces": { nom: "10 pièces", couleur: "argent" },
  "rangS": { nom: "Rang S", couleur: "or" }
};

export function debloquerSucces(id) {
  if (!succesDebloques.includes(id)) {
    succesDebloques.push(id);
    setTimeout(() => {
      succesDebloques = succesDebloques.filter(s => s !== id);
    }, 4000);
  }
}

export function dessinerSucces(ctx) {
  succesDebloques.forEach((id, index) => {
    const succes = succesDefinitions[id];
    if (!succes) return;

    ctx.fillStyle = "#333";
    ctx.fillRect(580, 20 + index * 60, 200, 50);

    ctx.fillStyle = "#fff";
    ctx.font = "14px Arial";
    ctx.fillText(succes.nom, 590, 45 + index * 60);

    const couleurs = {
      bronze: "#cd7f32",
      argent: "#c0c0c0",
      or: "#ffd700"
    };
    ctx.fillStyle = couleurs[succes.couleur] || "#fff";
    ctx.beginPath();
    ctx.arc(750, 45 + index * 60, 10, 0, Math.PI * 2);
    ctx.fill();
  });
}
