import {ApiCodeResponse} from 'common/data/enum';
export interface ApiDataResponse {
    result: boolean;
    code: ApiCodeResponse;
    data: any;
}