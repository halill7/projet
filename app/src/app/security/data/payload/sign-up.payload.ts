import {Payload} from "../../../shared/core/type";

export interface SignupPayload extends Payload {
  username: string;
  password: string;
  mail: string;
  googleHash: string;
  facebookHash: string;
}
