import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";

export function CoolModeBtn() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button className="mt-[1.6rem] bg-[#33e256] hover:bg-purple-700 text-black hover:text-white border-spacing-1 transition-all ease-in-out">Explore</Button>
      </CoolMode>
    </div>
  );
}
