/* tslint:disable */
import { FournisseurDTO } from './fournisseur-dto';
import { FactureDTO } from './facture-dto';
import { EmployeDTO } from './employe-dto';
export interface BonCommandeDTO {
  idBonCommande?: number;
  dateCommande?: string;
  prix?: number;
  fournisseur?: FournisseurDTO;
  facture?: FactureDTO;
  employe?: EmployeDTO;
}
