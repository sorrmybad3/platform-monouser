import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string) {
    const user = this.prisma.employee.findUnique({
      where: {
        deleted: false,
        id,
      },
      select: {
        deleted: true,
      },
    });
    return user;
  }

  find(email: string) {
    const user = this.prisma.employee.findUnique({
      where: {
        deleted: false,
        email,
      },
      select: {
        id: true,
        companyId: true,
        shopId: true,
        deleted: true,
        email: true,
        password: true,
      },
    });
    return user;
  }
}
