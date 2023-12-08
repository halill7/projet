import {IsEmpty} from "../../core/type";

export interface Token extends IsEmpty{
  token: string;
  refreshToken: string;
}
