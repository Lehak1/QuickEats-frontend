export type User={
    _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
}
//we cant share types between backend and frontend
//backend mai id is of type objectid here it is of type string
