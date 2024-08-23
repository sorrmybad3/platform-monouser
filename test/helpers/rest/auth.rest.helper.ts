import { INestApplication } from '@nestjs/common';
import { LoginDto } from 'src/auth/auth.dto';
import * as request from 'supertest';

export async function login(app: INestApplication, dto: LoginDto) {
  return await request(app.getHttpServer())
    .post('/auth/login')
    .send(dto)
    .expect('Content-Type', /json/);
}
