import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './auth.dto';
import { validateHash } from 'src/common/utils/bcrypt.utils';
import { JwtPayload } from './model/jwt.payload.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.authRepository.find(email);
    if (!validateHash(password, user?.password)) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async login(login: LoginDto) {
    const { email, password } = login;
    const user = await this.validateUser(email, password);
    const payload: JwtPayload = {
      username: user.email,
      sub: user.id,
      companyId: user.companyId,
      shopId: user.shopId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
