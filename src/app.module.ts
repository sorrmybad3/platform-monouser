import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ShopModule } from './shop/shop.module';
import { PatientModule } from './patient/patient.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CompanyModule,
    ShopModule,
    PatientModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
