import {HttpException, ValidationError} from "@nestjs/common";
import {ApiCodeResponse} from "@common/api";

export class ValidationException extends HttpException {
    constructor(errors: ValidationError[]) {
        console.log(errors);
        super({
            code: ApiCodeResponse.PAYLOAD_IS_NOT_VALID,
            data: errors.map((e) => Object.values(e.constraints)).flat(),
            result: false
        }, 499);
    }
}