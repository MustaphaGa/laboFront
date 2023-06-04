/* tslint:disable */
import { TypeAnalyseDTO } from './type-analyse-dto';
import { ReservationDTO } from './reservation-dto';
export interface AnalyseMedicalDTO {
  idAnalyse?: number;
  dateAnalyse?: string;
  descriprtion?: string;
  prixAnalyse?: number;
  resultat?: boolean;
  typeAnalyse?: TypeAnalyseDTO;
  reservation?: ReservationDTO;
}
