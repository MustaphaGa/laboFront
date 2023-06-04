/* tslint:disable */
import { BiologisteDTO } from './biologiste-dto';
import { AnalyseMedicalDTO } from './analyse-medical-dto';
export interface DetailResultatDTO {
  idResultat?: number;
  description?: string;
  valeur1?: number;
  valeur2?: number;
  valeur3?: number;
  valeur4?: number;
  valeur5?: number;
  valeur6?: number;
  valeur7?: number;
  valeur8?: number;
  valeur9?: number;
  valeur10?: number;
  biologiste?: BiologisteDTO;
  analyseMedical?: AnalyseMedicalDTO;
}
