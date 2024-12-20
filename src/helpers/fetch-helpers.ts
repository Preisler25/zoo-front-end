import axios from 'axios';
import { ENDPOINTS } from './api-endpoints.ts';
import { IAnimal } from '../interfaces/animals.ts';
import { IAnimalsBySpecies } from '../interfaces/species.ts';


export class FetchHelper {
  static async fetchAnimals() : Promise<{ animals: IAnimal[] }> {
    const response = await axios.get<{ animals: IAnimal[] }>(`${ENDPOINTS.ANIMALS}`);
    return response.data;
  }

  static async fetchAnimalsBySpecies() : Promise<{ species: IAnimalsBySpecies[] }> {
    const response = await axios.get<{ species: IAnimalsBySpecies[] }>(`${ENDPOINTS.ANIMALS_BY_SPECIES}`);
    return response.data;
  }
}
