import { Injectable } from '@nestjs/common';
import { PatientRepository } from './patient.repository';

@Injectable()
export class PatientService {
  constructor(private readonly patientRepository: PatientRepository) {}

  // create(createPatientDto: CreatePatientDto) {
  //   return 'This action adds a new patient';
  // }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  // update(id: number, updatePatientDto: UpdatePatientDto) {
  //   return `This action updates a #${id} patient`;
  // }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
