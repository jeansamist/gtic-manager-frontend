import { InputField } from "@/components/ui/field";
import { SubmitButton } from "@/components/ui/submit-button";
import { Body1 } from "@/components/ui/typo/body";
import { H1 } from "@/components/ui/typo/headings";
import { useToast } from "@/hooks/use-toast";
import { userSchema, UserSchemaType } from "@/schemas/user.schema";
import { login } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageComponent, useNavigate } from "rasengan";
import { FormProvider, useForm } from "react-hook-form";

export type LoginPageProps = {};

export const LoginPage: PageComponent = () => {
  const form = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  async function onSubmit(values: UserSchemaType) {
    const loginResp = await login(values);
    if (loginResp instanceof Error) {
      toast({
        title: loginResp.message,
      });
      return;
    }
    navigate("/");
  }
  return (
    <div className={"space-y-4"}>
      <div>
        <H1>Continue in your account</H1>
        <Body1>Enter your credentials and login</Body1>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            placeholder="Enter an username"
            name="username"
            formReturn={form}
            label="Username"
          />
          <InputField
            placeholder="Enter a password"
            formReturn={form}
            name="password"
            type="password"
            label="Password"
          />
          <SubmitButton formReturn={form} className="w-full !mt-8">
            Continue
          </SubmitButton>
        </form>
      </FormProvider>
    </div>
  );
};

LoginPage.path = "/login";
LoginPage.metadata = {
  title: "Login",
  description: "Login page",
};
