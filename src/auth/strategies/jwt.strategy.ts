import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from '../auth.repository';
import { JwtPayload } from '../model/jwt.payload.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authRepository: AuthRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    const user = await this.authRepository.findById(payload.sub);
    if (user?.deleted) {
      throw new UnauthorizedException();
    }
    return {
      sub: payload.sub,
      username: payload.username,
      companyId: payload.companyId,
      shopId: payload.shopId,
    };
  }
}
