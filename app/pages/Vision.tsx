import BoxReveal from "@/components/ui/box-reveal";
import ShineBorder from "@/components/ui/shine-border";
import { CoolModeBtn } from "../CoolModeBtn";

export async function Vision() {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-gradient-to-b from-mylavender to-transparent to-90% dark:from-black">
      <ShineBorder
        className="relative flex h-auto w-full max-w-lg flex-col items-center justify-center overflow-hidden rounded-md bg-background p-10 md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Our Vision<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Students to <span className="text-[#5046e6]">Enterprenuers</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <p>
              Our long term vision to foster an entrepreneurial culture in our
              campus while many focus on building startups which we also do ,
              but our main focus lies in building entrepreneurs . A startup may
              succeed or fail but an entrepreneur by nature never truly fails
              they learn adapt and continue to innovate
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <CoolModeBtn name={"explore"} />
        </BoxReveal>
      </ShineBorder>
    </div>
  );
}
