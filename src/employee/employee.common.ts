import { Prisma } from '@prisma/client';

export class Projections {
  static simpleEmployeeFindProjection(): Prisma.EmployeeSelect {
    return {
      id: true,
      name: true,
      email: true,
    };
  }
}
