import {HttpException} from '@nestjs/common';
import {ApiCodeResponse} from "@common/api";

export class ApiException extends HttpException{
    constructor(code:ApiCodeResponse, status:number) {
        super({
            code: code,
            data: null,
            result: false
        }, status);
    }
}