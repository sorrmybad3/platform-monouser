import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ShopRepository } from './shop.repository';

@Module({
  controllers: [ShopController],
  providers: [ShopService, ShopRepository],
  imports: [PrismaModule],
})
export class ShopModule {}
