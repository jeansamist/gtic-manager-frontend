import { GET, POST } from "@/lib/api";
import { CreateUserSchemaType } from "@/schemas/create-user.schemas";
import { format } from "date-fns";

export const getApplicationConfigurationStatus = async () => {
  const resp = await GET<{ status: boolean }>(
    "setup/is-has-been-configured",
    (data) => {
      console.log(data);
      return data;
    }
  );
  console.log(resp);

  return resp;
};

export const createRootUserService = async (data: CreateUserSchemaType) => {
  if (data.birthdate) {
    data.birthdate = format(data.birthdate, "yyyy-MM-dd") as unknown as Date;
  }
  const resp = await POST<CreateUserSchemaType, [], []>(
    "setup/create-root-user",
    data
  );
  return resp;
};
