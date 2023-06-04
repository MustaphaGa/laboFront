/* tslint:disable */
import { AnalyseMedicalDTO } from './analyse-medical-dto';
export interface FactureDTO {
  idFacture?: number;
  dateFacture?: string;
  montant?: number;
  analyseMedical?: AnalyseMedicalDTO;
}
