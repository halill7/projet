import {ApiCodeResponse} from "./api-code.response";

export interface ApiResponse {
  result: boolean;
  code: ApiCodeResponse;
  data: any;
  paramError: boolean;
}
