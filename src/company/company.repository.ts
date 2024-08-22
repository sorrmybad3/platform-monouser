import { Injectable } from '@nestjs/common';
import { Company, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}

  createCompany(company: Prisma.CompanyCreateInput): Promise<Company> {
    return this.prisma.company.create({ data: company });
  }

  createShop(shop: Prisma.ShopCreateInput) {
    return this.prisma.shop.create({ data: shop });
  }

  createEmployee(employee: Prisma.EmployeeCreateInput) {
    return this.prisma.employee.create({ data: employee });
  }
}
