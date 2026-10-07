# Constat

Plusieurs éléments d'accessibilité étaient manquants sur la page web d'origine.

- Aucun repère sur la sélection au clavier, ce qui rend plus difficile les repères de sélection
- Le filtrage des films rend les entrées plus grandes à partir d'un certain seuil, dépassant le champ de vision, donc difficile à lire par le changement brutal de taille et la trop grande hauteur
- Aucun alt/label n'est déclaré pour les éléments de la page, rendant presque impossible les fonctions du navigateur comme la lecture vocale du contenu
- Les éléments HTML sont génériques, il n'est pas possible de comprendre rapidement la fonction attendue de celui-ci, comme doit le faire un navigateur
- Le tag `infos` ne pointe vers rien, ce qui peut être gênant pour la compréhension de la navigation associée

# Solutions

- Les éléments sélectionnés par la navigation au clavier ont maintenant une bordure bleue foncé qui indique mieux l'élément actuel
- La liste de film utilise maintenant un affichage en grille, qui permet de fixer la taille des colonnes et des lignes et de garder une taille consistante sur les affiches de film
- Les éléments HTML sont maintenant plus précis, passant de `<div>`s génériques à `<main>`, `<ul>` ou encore `<button>`.