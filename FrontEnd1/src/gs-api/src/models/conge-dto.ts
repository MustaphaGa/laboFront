/* tslint:disable */
import { EmployeDTO } from './employe-dto';
export interface CongeDTO {
  idConge?: number;
  dateDebut?: string;
  dateFin?: string;
  employe?: EmployeDTO;
}
