export enum AppNode {
  AUTHENTICATED = 'dashboard',
  PROFIL = 'dashboard/profil',
  PUBLIC = 'account',
  REDIRECT_TO_PUBLIC = AppNode.PUBLIC,
  REDIRECT_TO_AUTHENTICATED = AppNode.AUTHENTICATED,
  MEMBER = 'member',
  DETAIL = 'detail/:id',
  SIGN_IN = 'signin',
  SIGN_UP = 'signup',
  FALL_BACK = '**',
}
