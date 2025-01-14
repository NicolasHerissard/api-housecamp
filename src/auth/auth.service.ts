import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    public async SignIn(name: string, password: string): Promise<{access_token: string}> {
        const user = await this.userService.findByName(name);
        if (user.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.name };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
