import {AppNode} from "./node.enum";

export enum AppRoutes {
  AUTHENTICATED = `/${AppNode.AUTHENTICATED}`,
  MEMBER = `${AppRoutes.AUTHENTICATED}/${AppNode.MEMBER}`,
  MEMBER_DETAIL = `${AppRoutes.MEMBER}/${AppNode.DETAIL}`
}
