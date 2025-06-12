export let ennemis = [];

export function genererEnnemis() {
  ennemis = [];
  for (let i = 0; i < 5; i++) {
    ennemis.push({
      x: Math.random() * 700 + 50,
      y: 370,
      w: 30,
      h: 30,
      vx: Math.random() < 0.5 ? 1 : -1
    });
  }
}

export function deplacerEnnemis() {
  for (let ennemi of ennemis) {
    ennemi.x += ennemi.vx;
    if (ennemi.x < 0 || ennemi.x > 770) {
      ennemi.vx *= -1;
    }
  }
}

export function dessinerEnnemis(ctx) {
  ctx.fillStyle = "red";
  for (let ennemi of ennemis) {
    ctx.fillRect(ennemi.x, ennemi.y, ennemi.w, ennemi.h);
  }
}

export function verifierCollisionAvecJoueur(joueur) {
  for (let ennemi of ennemis) {
    if (
      joueur.x < ennemi.x + ennemi.w &&
      joueur.x + joueur.w > ennemi.x &&
      joueur.y < ennemi.y + ennemi.h &&
      joueur.y + joueur.h > ennemi.y
    ) {
      return true;
    }
  }
  return false;
}
