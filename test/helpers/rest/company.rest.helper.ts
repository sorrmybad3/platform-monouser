import { INestApplication } from '@nestjs/common';
import { RegisterCompanyDto } from 'src/company/company.dto';

import * as request from 'supertest';

export async function registerCompany(
  app: INestApplication,
  dto: RegisterCompanyDto,
) {
  return await request(app.getHttpServer()).post('/company/register').send(dto);
}
