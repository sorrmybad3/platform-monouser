import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        companyId: '1231',
        shopId: '1231',
        ...data,
      },
    });
  }
}
