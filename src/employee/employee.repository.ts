import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Projections } from './employee.common';

@Injectable()
export class EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.employee.findMany({
      select: Projections.simpleEmployeeFindProjection(),
    });
  }

  findOne(id: string) {
    return this.prisma.employee.findUnique({
      where: { id },
      select: Projections.simpleEmployeeFindProjection(),
    });
  }
}
