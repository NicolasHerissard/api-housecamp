import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @HttpCode(200)
    @Post('login')
    public async login(@Body() user: User) {
        return this.authService.SignIn(user.name, user.password);
    }
}
