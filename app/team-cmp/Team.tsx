import TeamCard from './TeamCard';

const teamMembers = [
  {
    role: "Overall Head",
    name: "Parchuri Yaswanth",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/yaswanth.png",
  },
  {
    role: "Innovation & Incubation Head",
    name: "P. Ratna Teja",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "",
  },
  {
    role: "Innovation & Incubation Head",
    name: "M. Vikrant Choudary",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/vikranth.jpg",
  },
  {
    role: "Startup Assistance Program Head",
    name: "N. Charan Manikanta",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "",
  },
  {
    role: "Design & Branding Head",
    name: "Tappiti Ganesh",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/ganesh.jpg",
  },
  {
    role: "Web Tech Head",
    name: "Pavan Teja Bhima",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/pavan.png",
  },
  {
    role: "Web Tech Head",
    name: "E. Vishal",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/vishal.jpg",
  },
  {
    role: "Web Tech Head",
    name: "G.V. Santhosh",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "",
  },
  {
    role: "Marketing & People Relations Head",
    name: "Chetan Deva Pallela",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/Chetan.jpg",
  },
  {
    role: "Marketing & People Relations Head",
    name: "S. Ritesh Kumar",
    socialLinks: [
      { platform: 'Twitter', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
    imageUrl: "/Ritesh.jpg",
  },
  // Add additional members here as needed
];

export default function Team() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          role={member.role}
          name={member.name}
          socialLinks={member.socialLinks}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  );
}
