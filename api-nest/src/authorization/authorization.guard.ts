import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request?.headers?.authorization?.split(' ')[1];
    if (!sessionId) {
      throw new HttpException('Session Id Not Found', HttpStatus.UNAUTHORIZED);
    }
    return true;
  }
}
