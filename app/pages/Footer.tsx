import Link from "next/link";
import EcellNew from "../images/ecellverynew.png";
import Image from "next/image";

export default function Footer() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
      items: [
        {
          title: "Events",
          href: "/#",
        },
        {
          title: "Ideas",
          href: "/#",
        },
        {
          title: "Team",
          href: "/#team",
        },
        {
          title: "Blog",
          href: "/#",
        },
      ],
    },
    {
      title: "About",
      description: "Learn more about our club and its mission.",
      items: [
        {
          title: "Mission",
          href: "/#mission",
        },
        {
          title: "Vision",
          href: "/#vision",
        },
        {
          title: "History",
          href: "/#",
        },
        {
          title: "Achievements",
          href: "/#",
        },
      ],
    },
    {
      title: "Get Involved",
      description: "Join us and be a part of our community.",
      items: [
        {
          title: "Membership",
          href: "/#",
        },
        {
          title: "Volunteer",
          href: "/#",
        },
        {
          title: "Sponsorship",
          href: "/#",
        },
        {
          title: "Contact Us",
          href: "/#",
        },
      ],
    },
  ];

  return (
    <div className="p-5 w-full py-20 lg:py-40 bg-gradient-to-t from-violet-500 to-transparent to-90% dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              {/* <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                E-CELL REC CLUB
              </h2> */}
              <Image src={EcellNew} alt="E-CELL REC" width={200} height={200} />
                <p className="text-md max-w-lg leading-relaxed tracking-tight text-left dark:text-white">
                Empowering Innovative Minds
                </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left dark:text-white">
                <p><b>Raghu Engineering College</b></p>
                <p>Dakamarri</p>
                <p>Visakhapatnam</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left dark:text-white">
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};