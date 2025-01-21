import gticLogo from "@/assets/gtic-logo.png";
import { Toaster } from "@/components/ui/toaster";
import { currentUser as currentUserService } from "@/services/auth.service";
import Image from "@rasenganjs/image";
import { LayoutComponent, Outlet, useNavigate } from "rasengan";
import React, { useEffect } from "react";
export const AuthLayout: LayoutComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function currentUser() {
      const currentUser = await currentUserService();
      if (!(currentUser instanceof Error)) navigate("/");
    }
    currentUser();
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-col xl:flex-row h-screen">
        <div className="xl:h-full xl:w-1/2 bg-primary">
          <div className="p-8 flex items-center text-primary-foreground gap-2">
            <Image
              src={gticLogo}
              alt="Logo"
              width={75}
              height={100}
              className="!h-auto object-cover"
            />
            <div>
              <h1 className="font-bold text-xl">GTIC - Manager</h1>
              <p className="text-sm">German Technology Institute in Cameroon</p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 min-h-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </React.Fragment>
  );
};
AuthLayout.path = "/auth";
