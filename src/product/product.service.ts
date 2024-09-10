import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(data: CreateProductDto) {
    return await this.productRepository.create(data);
  }
}
