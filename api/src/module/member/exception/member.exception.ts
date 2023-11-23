import {ApiCodeResponse, ApiException} from '@common/api';
export class MemberCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.NO_TOKEN_FOUNDED, 401);
    }
}
export class MemberDeleteException extends ApiException {
    constructor() {
        super(ApiCodeResponse.USER_NOT_FOUND, 200);
    }
}
export class MemberNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.TOKEN_EXPIRED, 401);
    }
}
export class MemberListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.SIGNUP_ERROR, 200);
    }
}
export class MemberUpdateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.CREDENTIAL_DELETE_ERROR, 200);
    }
}

