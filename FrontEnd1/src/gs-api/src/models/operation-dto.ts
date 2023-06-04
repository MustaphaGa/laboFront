/* tslint:disable */
import { EmployeDTO } from './employe-dto';
import { BilanFinancierDTO } from './bilan-financier-dto';
export interface OperationDTO {
  idOperation?: number;
  dateOperation?: string;
  typeOperation?: string;
  employe?: EmployeDTO;
  bilanFinancier?: BilanFinancierDTO;
}
