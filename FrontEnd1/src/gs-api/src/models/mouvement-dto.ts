/* tslint:disable */
import { EmployeDTO } from './employe-dto';
export interface MouvementDTO {
  idMouvement?: number;
  typeMouvement?: string;
  detailMouvement?: string;
  frais?: number;
  employe?: EmployeDTO;
}
