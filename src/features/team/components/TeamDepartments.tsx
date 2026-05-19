import { Linkedin, UserCheck, Code, TrendingUp, Megaphone, Settings } from "lucide-react";

const hrTeam = [
  {
    name: "Priya Mehta",
    role: "Head of HR & Culture",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "HR leader with 12+ years of experience in talent acquisition and organizational development. Builds high-performing teams and fosters positive workplace culture.",
    linkedin: "https://linkedin.com/in/priyamehta",
  },
  {
    name: "Neha Kapoor",
    role: "Talent Acquisition Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Recruiting expert passionate about finding the right talent. 8 years of experience in tech recruitment and employer branding.",
    linkedin: "https://linkedin.com/in/nehakapoor",
  },
];

const techTeam = [
  {
    name: "Arjun Sharma",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Ex-Microsoft AI Engineer with 14+ years of experience in MLOps, cloud architecture, and scalable AI systems. Built AI solutions serving 100M+ users.",
    linkedin: "https://linkedin.com/in/arjunsharma",
  },
  {
    name: "Sneha Reddy",
    role: "Senior AI Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Deep Learning and NLP specialist with 8 years at Amazon ML. Expert in building production-ready AI models and RAG systems.",
    linkedin: "https://linkedin.com/in/snehareddy",
  },
  {
    name: "Vikram Patel",
    role: "Cloud Solutions Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "10+ years of experience in cloud architecture with AWS and Azure. Ex-Accenture, specializes in AI infrastructure and DevOps.",
    linkedin: "https://linkedin.com/in/vikrampatel",
  },
  {
    name: "Kavya Iyer",
    role: "ML Engineer - Computer Vision",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Computer Vision and Image AI expert with 7 years at Adobe. Builds cutting-edge CV models for real-world applications.",
    linkedin: "https://linkedin.com/in/kavyaiyer",
  },
];

const salesTeam = [
  {
    name: "Amit Gupta",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Sales leader with 10+ years in EdTech and B2B sales. Track record of building high-performing sales teams and exceeding revenue targets.",
    linkedin: "https://linkedin.com/in/amitgupta",
  },
  {
    name: "Ritu Sharma",
    role: "Corporate Sales Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Enterprise sales specialist focused on corporate training solutions. 8 years of experience in building client relationships.",
    linkedin: "https://linkedin.com/in/ritusharma",
  },
  {
    name: "Rohit Verma",
    role: "Business Development Manager",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
    bio: "Strategic partnership builder with expertise in EdTech market expansion. Passionate about creating win-win business opportunities.",
    linkedin: "https://linkedin.com/in/rohitverma",
  },
];

const marketingTeam = [
  {
    name: "Anjali Desai",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Digital marketing strategist with 12+ years of experience. Expert in growth marketing, content strategy, and brand building in the EdTech space.",
    linkedin: "https://linkedin.com/in/anjalidesai",
  },
  {
    name: "Karan Malhotra",
    role: "Content Marketing Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Content strategist and storyteller with a passion for AI education. Creates engaging content that drives conversions and builds community.",
    linkedin: "https://linkedin.com/in/karanmalhotra",
  },
  {
    name: "Pooja Nair",
    role: "Social Media Specialist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    bio: "Social media expert who builds engaged online communities. 6 years of experience in digital marketing and influencer partnerships.",
    linkedin: "https://linkedin.com/in/poojanair",
  },
];

const operationsTeam = [
  {
    name: "Suresh Kumar",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bio: "Operations leader with 15+ years of experience in process optimization and team management. Ensures smooth delivery of all training programs.",
    linkedin: "https://linkedin.com/in/sureshkumar",
  },
  {
    name: "Divya Menon",
    role: "Program Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Project management professional specializing in education program delivery. PMP certified with 9 years of experience.",
    linkedin: "https://linkedin.com/in/divyamenon",
  },
  {
    name: "Ramesh Iyer",
    role: "Quality Assurance Lead",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Quality champion ensuring excellence in every training program. 10+ years in operations and quality management.",
    linkedin: "https://linkedin.com/in/rameshiyer",
  },
];

const MemberCard = ({ member, borderColor }: any) => (
  <div className={`bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-${borderColor} hover:shadow-xl transition-all group`}>
    <div className="aspect-square overflow-hidden bg-gray-100">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <div className={`text-${borderColor} font-semibold mb-4`}>{member.role}</div>
      <p className="text-sm text-gray-600 mb-6">{member.bio}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] text-white hover:bg-[#006399] transition-colors text-sm font-semibold"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
    </div>
  </div>
);

export const TeamDepartments = () => {
  return (
    <div className="space-y-16 py-16 sm:py-24">
      {/* HR Team */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-[var(--brand-red-light)]">
            <UserCheck className="h-8 w-8 text-[var(--brand-red)]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Human Resources</h2>
            <p className="text-gray-600">Building and nurturing our talent</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hrTeam.map((member, i) => <MemberCard key={i} member={member} borderColor="[var(--brand-red)]" />)}
        </div>
      </section>

      {/* Tech Team */}
      <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-[var(--brand-orange-light)]">
              <Code className="h-8 w-8 text-[var(--brand-orange)]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Technology Team</h2>
              <p className="text-gray-600">Building the future of AI education</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techTeam.map((member, i) => <MemberCard key={i} member={member} borderColor="[var(--brand-orange)]" />)}
          </div>
        </div>
      </section>

      {/* Sales Team */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-green-100">
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sales Team</h2>
            <p className="text-gray-600">Connecting professionals with opportunities</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesTeam.map((member, i) => <MemberCard key={i} member={member} borderColor="green-600" />)}
        </div>
      </section>

      {/* Marketing Team */}
      <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-purple-100">
              <Megaphone className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Marketing Team</h2>
              <p className="text-gray-600">Spreading the word about AI education</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingTeam.map((member, i) => <MemberCard key={i} member={member} borderColor="purple-600" />)}
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-blue-100">
            <Settings className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Operations Team</h2>
            <p className="text-gray-600">Ensuring excellence in delivery</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operationsTeam.map((member, i) => <MemberCard key={i} member={member} borderColor="blue-600" />)}
        </div>
      </section>
    </div>
  );
};
