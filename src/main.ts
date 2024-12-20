import { FetchHelper } from "./helpers/fetch-helpers";
import { HTMLHelper } from "./helpers/html-helpers";
import { appHTML } from "./components/main-display.ts";
import "./style/style.css";

document.addEventListener("DOMContentLoaded", async () => {
  document.body.innerHTML = appHTML;
  const animalsRow = document.getElementById("animals-row")!;
  const speciesRow = document.getElementById("species-row")!;
  const selectedRow = document.getElementById("selected-row")!;
  const animalTemplate = document.getElementById(
    "animal-template"
  )! as HTMLTemplateElement;
  const speciesTemplate = document.getElementById(
    "species-template"
  )! as HTMLTemplateElement;

  try {
    const [animals, species] = await Promise.all([
      FetchHelper.fetchAnimals(),
      FetchHelper.fetchAnimalsBySpecies(),
    ]);

    let selected: string = "";
    speciesRow.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("species-name")) {
        selected = target.textContent!;

        try {
          const filtered = animals.filter(
            (animal) => animal.species === selected
          );
          HTMLHelper.populateAnimalTable(selectedRow, animalTemplate, filtered);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        console.log(selected);
      }
    });

    HTMLHelper.populateAnimalTable(animalsRow, animalTemplate, animals);
    HTMLHelper.populateSpeciesTable(
      speciesRow,
      speciesTemplate,
      species
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
