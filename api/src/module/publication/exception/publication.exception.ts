import {ApiCodeResponse, ApiException} from "@common/api";

export class PublicationCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_CREATE_ERROR, 401);
    }
}
export class PublicationDeleteException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_DELETE_ERROR, 200);
    }
}
export class PublicationUpdateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_UPDATE_ERROR, 401);
    }
}
export class PublicationListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_LIST_ERROR, 200);
    }
}
export class PublicationCountLikesException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_FIND_POST_LIKES_ERROR, 200);
    }
}
export class PublicationFindPostException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_FIND_POST_ERROR, 200);
    }
}
export class PublicationDetailException extends ApiException {
    constructor() {
        super(ApiCodeResponse.PUBLICATION_DETAIL_ERROR, 500);
    }
}