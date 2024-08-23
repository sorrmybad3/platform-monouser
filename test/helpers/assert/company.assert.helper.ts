import { ObjectId } from 'bson';
import { SimpleCreatedResponse } from 'src/common/responses/simple.responses';

export function assertRegisterCompanyResponse(response: SimpleCreatedResponse) {
  let { id, message } = response;
  expect(ObjectId.isValid(id)).toBe(true);
  expect(message).toBe('Company created successfully.');
}
