import { hash, compareSync } from 'bcrypt';

export function validateHash(string: string, hash: string) {
  try {
    return compareSync(string, hash);
  } catch (error) {
    //TODO: CONSOLE LOG RAW.
    console.log(error);
    return false;
  }
}

export async function hashString(string: string) {
  return await hash(string, 10);
}
