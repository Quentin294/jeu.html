export let piece = {
  x: Math.random() * 760 + 20,
  y: 350,
  w: 20,
  h: 20
};

export function genererNouvellePiece() {
  piece.x = Math.random() * 760 + 20;
  piece.y = 350;
}

export function dessinerPiece(ctx) {
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(piece.x, piece.y, piece.w / 2, 0, Math.PI * 2);
  ctx.fill();
}

export function verifierCollisionPiece(joueur, callback) {
  const dx = joueur.x + joueur.w / 2 - piece.x;
  const dy = joueur.y + joueur.h / 2 - piece.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 20) {
    genererNouvellePiece();
    callback();
  }
}
