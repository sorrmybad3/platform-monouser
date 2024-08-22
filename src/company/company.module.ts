import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyRepository } from './company.repository';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, CompanyRepository],
  imports: [PrismaModule],
})
export class CompanyModule {}
