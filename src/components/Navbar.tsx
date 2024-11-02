import { Dock } from "./ui/Dock";
export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="cursor-pointer rounded-full z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "></Dock>
    </div>
  );
}
