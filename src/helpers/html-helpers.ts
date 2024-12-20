import { IAnimal } from "../interfaces/animals";
import { IAnimalsBySpecies } from "../interfaces/species";

export class HTMLHelper {
  static populateAnimalTable(
    animalsRow: HTMLElement,
    animalTemplate: HTMLTemplateElement,
    animals: IAnimal[]
  ): void {
    animalsRow.innerHTML = "";

    animals.forEach((animal) => {
      const clone = animalTemplate.content.cloneNode(true) as HTMLElement;
      clone.querySelector(".animal-id")!.textContent = animal.id.toString();
      clone.querySelector(".animal-name")!.textContent = animal.name;
      clone.querySelector(".animal-species")!.textContent = animal.species;
      clone.querySelector(".animal-age")!.textContent = animal.age.toString();
      animalsRow.appendChild(clone);
    });
  }

  static populateSpeciesTable(
    speciesRow: HTMLElement,
    speciesTemplate: HTMLTemplateElement,
    species: IAnimalsBySpecies[]
  ): void {
    speciesRow.innerHTML = "";

    species.forEach((speciesItem) => {
      const clone = speciesTemplate.content.cloneNode(true) as HTMLElement;
      clone.querySelector(".species-name")!.textContent = speciesItem.species;
      clone.querySelector(".species-count")!.textContent =
        speciesItem._count.toString();
      speciesRow.appendChild(clone);
    });
  }
}
