import { AuthLayout } from "@/app/layouts/auth.layout";
import { LoginPage } from "@/app/pages/auth/login.page";
import { defineRouter, RouterComponent } from "rasengan";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AuthLayout,
  pages: [LoginPage],
})(AppRouter);
