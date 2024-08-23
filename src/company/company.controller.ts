import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { RegisterCompanyDto } from './company.dto';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new company, shop and admin employee.' })
  register(@Body() dto: RegisterCompanyDto) {
    return this.companyService.register(dto);
  }
}
