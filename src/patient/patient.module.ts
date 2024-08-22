import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PatientRepository } from './patient.repository';

@Module({
  controllers: [PatientController],
  providers: [PatientService, PatientRepository],
  imports: [PrismaModule],
})
export class PatientModule {}
