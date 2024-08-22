import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientRepository {
  constructor(private readonly patientService: PrismaService) {}
}
