import { DATA } from "@/data/info";
import { Dock } from "./ui/dock";
import React from "react";

export default function Navbar() {
  return (
    <Dock
      navbar={DATA}
      mobileClassName="rounded-full z-50 cursor-pointer md:flex  items-center  pointer-events-auto bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_-2px_4px_rgba(0,0,0,.05),0_-12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_20px_80px_-20px_#ffffff1f_inset] "
      DesktopClassName="hidden cursor-pointer rounded-full z-50  mx-auto md:flex min-h-full h-full items-center  bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "
    />
  );
}
