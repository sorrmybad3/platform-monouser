import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ShopModule } from './shop/shop.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CompanyModule,
    ShopModule,
    EmployeeModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
