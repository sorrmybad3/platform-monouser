import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() data: CreateProductDto) {
    const companyId = 'company-id';
    const shopId = 'shop-id';
    return this.productService.create(companyId, shopId, data);
  }
}
