import {ApiProperty} from '@nestjs/swagger';
export class RefreshTokenPayload {
    @ApiProperty()
    refresh: string;
}