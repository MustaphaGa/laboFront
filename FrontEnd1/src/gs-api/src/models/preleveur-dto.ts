/* tslint:disable */
import { AnalyseMedicalDTO } from './analyse-medical-dto';
export interface PreleveurDTO {
  idPreleveur?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  sexe?: string;
  telephone?: string;
  specialite?: string;
  analyseMedical?: AnalyseMedicalDTO;
}
