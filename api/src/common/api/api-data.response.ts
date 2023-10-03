import {ApiCodeResponse} from '@common/api/index';
export interface ApiDataResponse {
    result: boolean;
    code: ApiCodeResponse;
    data: any;
}