import { AuthTokenInterface } from "@/interfaces/auth-token.interface";
import { UserInterface } from "@/interfaces/user.interface";
import { GET, POST } from "@/lib/api";
import { UserSchemaType } from "@/schemas/user.schema";

export const login = async (data: UserSchemaType) => {
  const resp = await POST<UserSchemaType, AuthTokenInterface>(
    "auth/login",
    data
  );

  if (resp instanceof Error) return resp;
  localStorage.setItem("token", JSON.stringify(resp));
  localStorage.setItem("AUTH_TOKEN", resp.token);
  return resp;
};

export const currentUser = async (): Promise<UserInterface | Error> => {
  const response = await GET<UserInterface>("auth/me");
  return response;
};
