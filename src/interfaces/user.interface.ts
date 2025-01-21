import { BaseModelInterface } from "./base-model.interface";
import { PersonInterface } from "./person.interface";
import { RoleInterface } from "./role.interface";

export interface UserInterface extends BaseModelInterface {
  username: string;
  password: string;
  person: PersonInterface;
  role: RoleInterface;
}
