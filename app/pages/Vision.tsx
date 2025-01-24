import BoxReveal from "@/components/ui/box-reveal";
import ShineBorder from "@/components/ui/shine-border";

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
          <div className="mt-6 text-justify">
            <p>
              To ignite and nurture entrepreneurial spirit
              among students, empowering them to innovate, create, and lead
              impactful ventures that contribute to economic growth and societal
              progress.
            </p>
          </div>
        </BoxReveal>
      </ShineBorder>
    </div>
  );
}
