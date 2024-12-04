import TeamCard from './TeamCard';

export default function Team() {
  return (
    <div>
      <TeamCard
        role="Web Tech Head"
        name="Pavan Teja"
        socialLinks={[
          { platform: 'Twitter', url: 'https://twitter.com/pavanteja' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/in/pavanteja' },
        ]}
        imageUrl="/app/images/EcellREClogo.png" // Correct path for public folder images
      />
    </div>
  );
}
