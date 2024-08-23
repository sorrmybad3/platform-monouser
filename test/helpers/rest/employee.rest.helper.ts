import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

export async function getEmployeeById(
  app: INestApplication,
  id: string,
  auth: string,
) {
  return await request(app.getHttpServer())
    .get(`/employee/${id}`)
    .set('Authorization', `Bearer ${auth}`);
}
