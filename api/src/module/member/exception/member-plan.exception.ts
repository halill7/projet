import {ApiCodeResponse, ApiException} from '@common/api';
export class MemberPlanCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.NO_TOKEN_FOUNDED, 401);
    }
}
export class MemberPlanDeleteException extends ApiException {
    constructor() {
        super(ApiCodeResponse.USER_NOT_FOUND, 200);
    }
}
export class MemberPlanNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.TOKEN_EXPIRED, 401);
    }
}
export class MemberPlanListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.SIGNUP_ERROR, 200);
    }
}
export class MemberPlanUpdateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.CREDENTIAL_DELETE_ERROR, 200);
    }
}

