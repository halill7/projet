import {ApiCodeResponse} from "@common/data/enum";
import {ApiException} from "@common/exception";

export class TestException extends ApiException {
    constructor() {
        super(ApiCodeResponse.TEST, 200);
    }
}