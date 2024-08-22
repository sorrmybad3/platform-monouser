import { Injectable } from '@nestjs/common';
import { RegisterCompanyDto } from './company.dto';
import { CompanyRepository } from './company.repository';
import { hashString } from 'src/common/utils/bcrypt.utils';
import { ReservedNames } from 'src/common/enum/enum.names';
import { SimpleCreatedResponse } from 'src/common/responses/simple.responses';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async register(dto: RegisterCompanyDto) {
    const { email, name, password } = dto;
    const company = await this.companyRepository.createCompany({ email, name });

    const shop = await this.companyRepository.createShop({
      companyId: company.id,
      name,
      email,
    });

    const employee = await this.companyRepository.createEmployee({
      companyId: company.id,
      shopId: shop.id,
      email,
      name: ReservedNames.Administrator,
      password: await hashString(password),
    });

    const response: SimpleCreatedResponse = {
      id: employee.id,
      message: 'Company registered successfully',
    };

    return response;
  }
}
