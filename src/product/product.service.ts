import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(companyId: string, shopId: string, data: CreateProductDto) {
    return await this.productRepository.create(companyId, shopId, data);
  }
}
