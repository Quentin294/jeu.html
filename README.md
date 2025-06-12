# 🎮 Jeu de Plateforme HTML/JS

---

## 📁 Structure des fichiers

```
📂 /projet-jeu/
│
├── index.html          → Menu principal avec tous les boutons
├── jeu.html            → Le jeu complet (plateforme sans scrolling)
├── roue.html           → Roue de la chance (skins à gagner)
├── tenues.html         → Casier/tenues débloquées ou non
├── succes.html         → (À venir) Liste complète des succès
├── js/
│   ├── pieces.js       → Gestion des pièces aléatoires
│   ├── xp.js           → Bulles d’XP et barre d’expérience
│   ├── ennemis.js      → Mouvement et collisions des ennemis
│   ├── succes.js       → Succès avec trophée et notifications
│   └── skins.js        → Gestion des skins obtenus/sélectionnés
```

---

## 🧩 Fonctionnalités complètes

### 🎯 Gameplay

- 🧍 Déplacement joueur (flèche haut = saut)
- 🟡 **Pièces** apparaissant aléatoirement
- 🔵 **Bulles d'XP** (XP + barre d’XP en bas à droite)
- 👾 **Ennemis** qui se déplacent et tuent au contact
- 🏆 **Succès** avec trophée (bronze / argent / or)
- 🪙 **Score**, nombre de pièces collectées, **rang** affiché sous le score

---

### ⏸️ Menu Pause (barre espace)

- Reprendre la partie
- Recommencer depuis le début
- Quitter vers le menu principal

---

### 💀 Game Over

- S’affiche en cas de collision avec un ennemi
- Deux options : Recommencer ou Quitter

---

### 🎨 Skins

- Liés à la **roue de la chance**
- 5 skins à débloquer
- Sélection du skin dans la page `tenues.html`
- Skin sélectionné visible directement en jeu

---

## 🌀 Roue de la chance (`roue.html`)

- 5 skins possibles
- Rotation animée
- Temps d’attente d’**1 heure** entre chaque tirage
- Le skin gagné est stocké dans le navigateur

---

## 👕 Tenues (`tenues.html`)

- Skins **débloqués** visibles en couleurs
- Skins **non obtenus** sont grisés
- Sélectionne ton skin pour l’utiliser dans le jeu

---

## 💾 Sauvegarde locale (`localStorage`)

- ✅ Skins débloqués
- ✅ Skin sélectionné
- ✅ Succès obtenus
- ✅ Timer roue de la chance

---

## 🚀 Comment jouer

1. Ouvre `index.html` dans ton navigateur
2. Clique sur **Commencer** pour jouer
3. Utilise la **flèche ↑** pour sauter, **Espace** pour pause
4. Ramasse pièces et bulles d’XP
5. Évite les ennemis ou c’est le **Game Over** !

---

## 🛠️ Développement futur

- [ ] Page `succes.html` avec tous les succès débloqués
- [ ] Passe de combat avec niveaux et XP
- [ ] Effets visuels et sonores
- [ ] Responsive mobile

---

## 🧪 Dépannage

### 🟥 Problème : écran bleu ?
Vérifie :
- ✅ Tu ouvres bien le fichier `.html` dans un **navigateur** (pas dans Word ou éditeur)
- ✅ Tous les fichiers `.js` nécessaires sont présents
- ✅ Le code n’a pas de balises HTML manquantes (notamment `<canvas>`)

Si le problème persiste, **envoie ton fichier `jeu.html`** pour correction.

---

## 📬 Contact

Créé avec ❤️ pour un projet personnel ou éducatif.
