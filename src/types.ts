export interface Country {
  continent: string;
  iso: string;
  name: string;
  noPostalCode: boolean;
  limited: boolean;
  notAvailable: boolean;
  url: string;
  continentCode: number;
}

export interface Service {
  id: number;
  title: string;
  url: string;
  image: string;
}

export interface User {
  email: string;
  company: string;
  profilePicture?: string;
}
