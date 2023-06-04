/* tslint:disable */
import { PatientDTO } from './patient-dto';
export interface ReservationDTO {
  idReservation?: number;
  dateReservation?: string;
  description?: string;
  patient?: PatientDTO;
}
