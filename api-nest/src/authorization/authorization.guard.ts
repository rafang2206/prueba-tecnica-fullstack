import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import configuration from 'src/config/configuration';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request?.headers?.authorization?.split(' ')[1];
    if (!sessionId) {
      throw new HttpException('Session Id Not Found', HttpStatus.UNAUTHORIZED);
    }
    try {
      const payload = await this.jwtService.verifyAsync(sessionId, {
        secret: configuration().secret,
      });
      request['user'] = payload;
    } catch (error) {
      throw new HttpException('Session Id Invalid', HttpStatus.UNAUTHORIZED);
    }
    return true;
  }
}
