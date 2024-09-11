import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';
import { GetJwtPayload } from 'src/common/decorators/jwtpayload.decorator';
import { JwtPayload } from 'src/auth/model/jwt.payload.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@GetJwtPayload() auth: JwtPayload, @Body() data: CreateProductDto) {
    const companyId = auth.companyId;
    const shopId = auth.shopId;
    return this.productService.create(companyId, shopId, data);
  }
}
