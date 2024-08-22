import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  findAll() {
    return this.employeeRepository.findAll();
  }

  findOne(id: string) {
    return this.employeeRepository.findOne(id);
  }
}
