import {ApiCodeResponse} from 'common/data/enum';
export interface ApiResponse {
    result: boolean;
    code: ApiCodeResponse;
    data: any;
}