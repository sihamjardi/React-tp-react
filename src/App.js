// App.js
import HelloWorld from './composants/HelloWorld';

import Greeting from './composants/Greeting';

import Profil from './composants/Profil';

import Voiture from './composants/Voiture';

import ListeCourses from './composants/ListeCourses';

function App() {
  return (
    <div>
      {/* Exercice 1 : Affichage des voitures */}
      <h2>Liste des voitures :</h2>
      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Peugeot" modele="208" couleur="Bleu" />
      <Voiture marque="Renault" modele="Clio" couleur="Noir" />

      <hr />

      {/* Exercice 2 : Listes dynamiques */}
      <h2>Listes de courses :</h2>
      <ListeCourses elements={['Tomates', 'Pâtes', 'Lait']} />
      <ListeCourses elements={['Pommes', 'Poulet', 'Yaourt', 'Pain']} />
    </div>
  );
}

export default App;