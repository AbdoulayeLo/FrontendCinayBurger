export interface UserData {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  status:number;
  data: UserData;
  token: string;
}
