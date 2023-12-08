export type Payload = Object;
export type Dto = Object;
export interface IsEmpty{
  isEmpty:boolean;
}
export interface Business extends IsEmpty{
  id: string;
  str: string;
}
