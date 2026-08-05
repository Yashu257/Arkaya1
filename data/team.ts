export interface TeamMember {
  id: number;
  name: string;
  designation?: string;
  expertise?: string;
  image?: string | null;
  initials?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Navkesh",
    initials: "N",
    image: null,
  },
  {
    id: 2,
    name: "Prabhuteja",
    initials: "P",
    image: null,
  },
  {
    id: 3,
    name: "Yashwanth",
    initials: "Y",
    image: null,
  },
  {
    id: 4,
    name: "Guruvishnu",
    initials: "G",
    image: null,
  },
  {
    id: 5,
    name: "Surya",
    initials: "S",
    image: null,
  },
  {
    id: 6,
    name: "Noshita",
    initials: "N",
    image: null,
  },
  {
    id: 7,
    name: "Lokesh",
    initials: "L",
    image: null,
  },
  {
    id: 8,
    name: "Guuprasad",
    initials: "G",
    image: null,
  },
];
