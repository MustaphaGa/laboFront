/* tslint:disable */
import { DepartementDTO } from './departement-dto';
export interface BiologisteDTO {
  idBiologiste?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  sexe?: string;
  telephone?: string;
  codeBiologiste?: string;
  service?: string;
  departement?: DepartementDTO;
}
