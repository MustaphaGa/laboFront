/* tslint:disable */
import { EmployeDTO } from './employe-dto';
export interface RecrutementDTO {
  idRecrutement?: number;
  dateRecrutement?: string;
  typeRecrutement?: string;
  employe?: EmployeDTO;
}
