import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { RegisterCompanyDto } from 'src/company/company.dto';
import { SimpleCreatedResponse } from 'src/common/responses/simple.responses';
import { getEmployeeById, login, registerCompany } from './helpers/rest';
import { ObjectId } from 'bson';
import { faker } from '@faker-js/faker';
import { Employee } from '@prisma/client';
import { ReservedNames } from 'src/common/enum/enum.names';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should create a company, shop and an employee.', async () => {
    const name = faker.company.name(),
      email = faker.internet.email(),
      password = faker.internet.password();

    const registerCompanyDto: RegisterCompanyDto = {
      name,
      email,
      password,
    };

    const registerCompanyResponse: SimpleCreatedResponse = {
      id: faker.string.sample(),
      message: 'Company registered successfully.',
    };

    //TODO: Abstract this into a helper function
    //Create company, shop and employee.
    const response = await registerCompany(app, registerCompanyDto);
    expect(response.status).toBe(201);
    const { id, message } = response.body as SimpleCreatedResponse;
    expect(ObjectId.isValid(id)).toBe(true);
    expect(message).toBe(registerCompanyResponse.message);

    //Login and get token.
    const loginErrorReponse = await login(app, {
      email,
      password: faker.internet.password(),
    });
    expect(loginErrorReponse.status).toBe(401);

    const loginReponse = await login(app, { email, password });
    expect(loginReponse.status).toBe(200);
    const { access_token } = loginReponse.body;
    expect(access_token).toBeDefined();

    //Get employee by id.
    const employeeGetResponse = await getEmployeeById(app, id, access_token);
    expect(employeeGetResponse.status).toBe(200);
    const employee = employeeGetResponse.body as Employee;
    expect(employee.name).toBe(ReservedNames.Administrator);
    expect(employee.email).toBe(email);
  });
});
