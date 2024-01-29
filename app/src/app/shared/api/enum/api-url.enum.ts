export enum ApiURI{
  // Auth
  SIGN_IN='account/signin',
  SIGN_UP='account/signup',
  ME='account/me',
  REFRESH_TOKEN = 'account/refresh',

  // Posts
  PUBLICATION = 'publication/create',
  PUBLICATION_LIST = 'publication/list',
  COUNT_PUBLICATION = 'publication/count-publication',
  PUBLICATION_LAST = 'publication/last-publication',

  // Likes
  LIKE = 'like/create',
  LIKE_LIST = 'like/list',
  LIKE_LAST = 'like/last-like',
  COUNT_LIKES = 'like/count-likes',

  // Comments
  COMMENTAIRE = 'commentaire/create',
  COMMENTAIRE_LIST = 'commentaire/list',
  COMMENTAIRE_PUBLI = 'commentaire/detailTab',
  COMMENTAIRE_LAST = 'commentaire/last-comment',

  // Profile
  PROFIL_DETAIL = 'profil/detail-profil',
  PROFIL_UPDATE = 'profil/update'

}
