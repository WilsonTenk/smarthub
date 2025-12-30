import { Project, BlogPost } from './types';

// Helper to get image path with base URL
const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const projectsData: Project[] = [
  {
    id: "brave-movement",
    title: "Brave Movement Community Engagement",
    period: "Aug 2025",
    sponsor: "Brave Movement Ghana",
    communities: "Havedzi",
    reach: "83 community members",
    description: "Led a community engagement session on the prevention of childhood sexual violence (CSV). Empowered members with knowledge to identify, prevent, and respond to cases.",
    image: img("IMG_0010.jpg"),
    fullContent: "As members of the Brave Movement Ghana, SMART HUB GH and Developers Net successfully led a community engagement session on the prevention of childhood sexual violence (CSV) at Havedzi. The event brought together 83 community members, including key stakeholders and adults, to build awareness and collective responsibility toward protecting children. Through participatory discussions and interactive education, the session empowered community members with knowledge, practical skills, and confidence.",
    galleryImages: [
        img("IMG_0011.jpg"),
        img("IMG_0017.jpg"),
        img("IMG_0116.jpg")
    ]
  },
  {
    id: "digi-health",
    title: "Digi-Health Impact Project (DHIP)",
    period: "Recent",
    sponsor: "KGL Foundation",
    communities: "Ketu South District",
    reach: "720 beneficiaries",
    description: "Trained high school students in Microsoft Office Suite, graphics design, and cybersecurity alongside an SRHR education campaign.",
    image: img("IMG_0196.jpg"),
    fullContent: "The Digi-Health Impact Project trained high school students in Microsoft Office Suite, graphics design, and cybersecurity, alongside an SRHR education campaign. This initiative improved the digital literacy and employability of young people, preparing them for the modern workplace while empowering them with knowledge on reproductive health.",
    galleryImages: [
        img("IMG_0253.jpg"),
        img("IMG_1632.jpg"),
        img("IMG_1642.jpg")
    ]
  },
  {
    id: "empower-her",
    title: "Empower HER Project",
    period: "Feb – Aug 2024",
    sponsor: "Plan International Ghana",
    communities: "Ve-Golokwati, Ve-Wudome",
    reach: "297 beneficiaries",
    description: "Promoted safe sex education, mobile clinic services, and menstrual hygiene. Built capacity of peer educators.",
    image: img("IMG_1647.jpg"),
    fullContent: "This project promoted safe sex education, mobile clinic services, and menstrual hygiene training. It also built the capacity of community peer educators to champion SRHR advocacy. The project increased adolescents' access to reproductive health services and helped reduce stigma associated with menstruation.",
    galleryImages: [
        img("IMG-20250902-WA0052.jpg"),
        img("IMG-20250902-WA0054.jpg"),
        img("IMG_WhatsApp.jpg")
    ]
  },
  {
    id: "safe-flow",
    title: "Safe Flow Project",
    period: "Oct 2023 – Feb 2024",
    sponsor: "Plan International Ghana",
    communities: "Adaklu-Ablornu, Sogakope-Fievie",
    reach: "393 beneficiaries",
    description: "Focused on menstrual hygiene, waste management, and adolescent health.",
    image: img("IMG_2545.jpg"),
    fullContent: "The Safe Flow Project focused on menstrual hygiene, waste management, and adolescent health advocacy. Through community engagement and radio sensitization, the project increased awareness on menstrual health and promoted the safe disposal of sanitary products. It also strengthened adolescent clubs and empowered girls with knowledge to challenge stigma.",
    galleryImages: [
        img("IMG_2775.jpg"),
        img("IMG_0010.jpg"),
        img("IMG_0011.jpg")
    ]
  },
  {
    id: "i-decide",
    title: "I Decide Drive",
    period: "Oct 2022 – Feb 2023",
    sponsor: "Plan International Ghana",
    communities: "Afadjato South, South Tongu, Hohoe",
    reach: "1,200+ beneficiaries",
    description: "Empowered adolescents to make informed decisions about sexual rights and teenage pregnancy.",
    image: img("IMG_0017.jpg"),
    fullContent: "This campaign empowered adolescents to make informed decisions about their sexual rights, focusing on menstrual hygiene, teenage pregnancy, STIs, mental health, and SRHR. It also involved parents, community leaders, and local institutions, leading to more inclusive community dialogue on adolescent wellbeing.",
    galleryImages: [
        img("IMG_0116.jpg"),
        img("IMG_0196.jpg"),
        img("IMG_0253.jpg")
    ]
  },
  {
    id: "smart-girl",
    title: "SMART Girl Project",
    period: "Aug 2021 – Feb 2022",
    sponsor: "Plan International Ghana",
    communities: "Ve-Wudome, Ve-Golokwati",
    reach: "325 beneficiaries",
    description: "Enhanced adolescent knowledge on teenage pregnancy prevention and sexual abuse through mentorship.",
    image: img("IMG_1632.jpg")
  },
  {
    id: "covid-19",
    title: "COVID-19 Campaign",
    period: "Mar – Jul 2020",
    sponsor: "SMART HUB GH",
    communities: "Adaklu-Ablornu",
    reach: "300+ school children",
    description: "Educated pupils and parents on COVID-19 protocols, personal hygiene, and reproductive health rights.",
    image: img("IMG_1642.jpg")
  },
  {
    id: "capacity-building",
    title: "Capacity Building (UHAS – Ho)",
    period: "Ongoing",
    sponsor: "SMART HUB GH",
    communities: "Tertiary Students",
    reach: "50 tertiary students",
    description: "Focused on public speaking and digital skills, empowering university students for leadership.",
    image: img("IMG_1647.jpg")
  },
  {
    id: "vee-mentorship",
    title: "Vee Mentorship",
    period: "Past",
    sponsor: "Developer's Net",
    communities: "Ho",
    reach: "120 girls",
    description: "Provided mentorship to 120 girls on career choices, teenage pregnancy prevention, and menstrual hygiene.",
    image: img("IMG-20250902-WA0052.jpg")
  }
];

export const blogData: BlogPost[] = [
  {
    id: "breaking-silence-havedzi",
    title: "Breaking the Silence: Havedzi Community Speaks Up",
    date: "August 25, 2025",
    category: "Advocacy",
    author: "SMART HUB Media",
    image: img("IMG_0010.jpg"),
    excerpt: "A deep dive into our recent community engagement on childhood sexual violence prevention.",
    content: "As members of the Brave Movement Ghana, SMART HUB GH and Developers Net successfully led a community engagement session on the prevention of childhood sexual violence (CSV) at Havedzi on 23rd August 2025. The event brought together 83 community members (32 males and 51 females), including key stakeholders and adults, to build awareness and collective responsibility toward protecting children..."
  },
  {
    id: "digital-skills-youth",
    title: "Why Digital Skills are Vital for Ghanaian Youth",
    date: "July 15, 2025",
    category: "Education",
    author: "Program Coordinator",
    image: img("IMG_0196.jpg"),
    excerpt: "Exploring the impact of the Digi-Health Impact Project and the future of work.",
    content: "In a rapidly evolving digital world, the gap between opportunity and capacity is widening. Our Digi-Health Impact Project seeks to bridge this gap by equipping high school students with essential Microsoft Office and Graphic Design skills..."
  },
  {
    id: "menstrual-hygiene-matters",
    title: "Menstrual Hygiene: Ending the Stigma",
    date: "May 28, 2025",
    category: "Health",
    author: "Health Team",
    image: img("IMG_WhatsApp.jpg"),
    excerpt: "Reflections from the Safe Flow Project and our work in Adaklu-Ablornu.",
    content: "Menstruation is a natural biological process, yet it remains shrouded in silence and stigma in many communities. Through the Safe Flow Project, we are changing the narrative..."
  }
];