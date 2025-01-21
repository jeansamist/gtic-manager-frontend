export interface AuthTokenInterface {
  type: string;
  name: string | null;
  token: string;
  lastUsedAt: Date | null;
  expireAt: Date | null;
}
