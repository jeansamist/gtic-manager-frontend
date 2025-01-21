import { BaseModelInterface } from "./base-model.interface";

export interface PersonInterface extends BaseModelInterface {
  email: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  gender: "male" | "female";
  phoneNumber: string;
  address: string;
  avatar?: string;
}
