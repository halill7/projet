export enum ApiCodeResponse {
    TEST = 'api.result.test',
    STOCK_DETAIL_SUCCESS = 'api.error.stock-detail',
    USER_ALREADY_EXIST = 'api.security.error.user-exist',
    CREDENTIAL_DELETE_ERROR = 'api.security.error.credential-delete',
    TOKEN_EXPIRED = 'api.security.error.token-expired',
    USER_NOT_FOUND = 'api.security.error.user-not-found',
    SIGNUP_ERROR = 'api.security.error.signup',
    TOKEN_GEN_ERROR = 'api.security.error.token-gen',
    NO_TOKEN_FOUNDED = 'api.security.error.no-token-found',
    COMMON_SUCCESS = 'SUCCESS_IS_PERMANENT',

    // Exception for member payload
    MEMBER_PAYLOAD_ACTIVE_INVALID = 'api.security.error.member-payload-active-invalid',
    MEMBER_PAYLOAD_SUBSCRIPTION_NOT_VALID = 'api.security.error.member-payload-subscription-not-valid',
    MEMBER_PAYLOAD_ACTIVATION_CODE_LENGTH_ERROR = 'api.security.error.member-payload-activation-code-length-error',
    MEMBER_PAYLOAD_IBAN_LENGTH_ERROR = 'api.security.error.member-payload-iban-length-error',
    MEMBER_PAYLOAD_PHONE_LENGTH_ERROR = 'api.security.error.member-payload-phone-length-error',
    MEMBER_PAYLOAD_MAIL_LENGTH_ERROR = 'api.security.error.member-payload-mail-length-error',
    MEMBER_PAYLOAD_MAIL_IS_NOT_VALID = 'api.security.error.member-payload-mail-is-not-valid',
    MEMBER_PAYLOAD_BIRTHDATE_IS_NOT_VALID = 'api.security.error.member-payload-birthday-is-not-valid',
    MEMBER_PAYLOAD_LASTNAME_LENGTH_ERROR = 'api.security.error.member-payload-lastname-length-error',
    MEMBER_PAYLOAD_LASTNAME_IS_NOT_STRING = 'api.security.error.member-payload-lastname-is-not-string',
    MEMBER_PAYLOAD_FIRSTNAME_LENGTH_ERROR = 'api.security.error.member-payload-firstname-length-error',
    MEMBER_PAYLOAD_FIRSTNAME_IS_NOT_STRING = 'api.security.error.member-payload-firstname-is-not-string',
    MEMBER_PAYLOAD_MEMBER_ID_LENGTH_ERROR = 'api.security.error.member-payload-member-id-length-error',
    MEMBER_PAYLOAD_MEMBER_ID_MANDATORY = 'api.security.error.member-payload-member-id-mandatory',



    PAYLOAD_IS_NOT_VALID = 'api.security.error.payload-is-not-valid',

}