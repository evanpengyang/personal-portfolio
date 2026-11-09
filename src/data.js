export const profile = {
  name: "Evan Peng",
  location: "Vancouver, BC",
  email: "evan.py.peng@gmail.com",
};

export const projects = [
  {
    slug: "etika",
    title: "Etika",
    description: "A citation-first legal compliance agent for British Columbia businesses.",
    tags: ["Python", "FastAPI", "Gemini", "Next.js"],
    award: "StormHacks 2026 finalist · Top 3 of 842",
    link: "https://devpost.com/software/etika?ref_content=my-projects-tab&ref_feature=my_projects",
    linkLabel: "View on Devpost",
    detail: "Etika is a RAG-powered legal compliance agent built for British Columbia businesses. It placed in the top three out of 842 StormHacks participants after I built a retrieval system around 19 government pages, splitting them by legal section and embedding 240 chunks in TiDB with batched Gemini embeddings. Results use cosine-ranked retrieval with lexical fallback, and a post-retrieval citation check prevents the agent from attaching advice to a source chunk it did not actually retrieve.",
    type: "etika-reveal",
    accent: "blue",
  },
  {
    slug: "campus-eats",
    title: "Campus Eats",
    description: "A UBC events platform for finding community gatherings with food.",
    tags: ["TypeScript", "React", "Puppeteer", "Firebase"],
    link: "https://devpost.com/software/campuseats-gfmuxz",
    linkLabel: "View on Devpost",
    detail: "Campus Eats is an all-in-one UBC events platform for discovering gatherings with food on campus. I built a Puppeteer pipeline that watched more than 200 Instagram accounts and parsed over 1,000 posts with the Gemini API to surface relevant events. Google Calendar and Mapbox REST APIs handle event display and location context, while Firebase provides the backend database.",
    type: "campus-eats",
    accent: "orange",
  },
  {
    slug: "psyflow",
    title: "Psyflow",
    description: "Real-time physiotherapy feedback with computer vision and pose estimation.",
    tags: ["Python", "OpenCV", "MediaPipe", "Flask"],
    link: "https://devpost.com/software/psyflow",
    linkLabel: "View on Devpost",
    detail: "Psyflow is a real-time physiotherapy feedback tool built with OpenCV, MediaPipe, and Flask. It reads live video, estimates a person’s pose, and evaluates joint angles against the target movement. The system turns those measurements into similarity scores and immediate feedback so an exercise can be adjusted while it is happening.",
    type: "psyflow",
    accent: "yellow",
  },
  {
    slug: "image-to-character",
    title: "Image to Character",
    description: "A pipeline that turns a photo into a rigged, animated game character.",
    tags: ["TypeScript", "React Three Fiber", "Rapier", "Hunyuan3D"],
    link: "https://devpost.com/software/chud-life",
    linkLabel: "View on Devpost",
    detail: "Image to Character is an end-to-end pipeline for turning human photos into fully rigged and animated game characters. I connected React Three Fiber and Rapier for the interactive 3D layer with Hunyuan3D and Meshy.ai for modeling and rigging, creating a path from an ordinary image to a character ready for play.",
    type: "chud-life",
    accent: "blue",
  },
  {
    slug: "internship-tracker",
    title: "Internship Analytics Tracker",
    description: "A desktop tracker for job applications, next steps, and recruiting stats.",
    tags: ["Java", "Swing", "JUnit"],
    link: "https://github.com/evanpengyang/Java-Internship-Analytics-Tracker",
    linkLabel: "View on GitHub",
    detail: "Internship Analytics Tracker is a Java desktop application for managing internship applications, their next steps, and recruiting statistics. I designed the app around object-oriented principles, added persistent application data, and built its interface in Swing. The core logic was developed test first with JUnit and reached full code coverage.",
    type: "internship-tracker",
    accent: "orange",
  },
];

export const experience = [
  {
    period: "May 2026 - Aug 2026",
    place: "ND Research",
    role: "Technical Product Manager Intern",
  },
  {
    period: "Feb 2026 - May 2026",
    place: "Tracer Progress",
    role: "Software Engineer Intern",
  },
];

export const leadershipExperience = [
  {
    period: "Sep 2025 - Present",
    place: "UBC Product Management Club",
    role: "Software Developer",
  },
  {
    period: "Apr 2026 - Present",
    place: "UBC BizTech",
    role: "Event Director",
  },
  {
    period: "Sep 2026 - Present",
    place: "The University of British Columbia",
    role: "Residence Advisor",
  },
  {
    period: "Sep 2025 - Apr 2026",
    place: "BUCS Community Team",
    role: "Software Developer",
  },
  {
    period: "Aug 2024 - Jun 2025",
    place: "British Columbia Junior Chess Association",
    role: "Program Director",
  },
];

/**
 * Photo Journal
 *
 * 1. Drop your images into  public/photos/
 * 2. Add an entry below — that's it.
 *
 * Sections appear in the order listed here.
 * Photos within each section appear in the order listed.
 *
 * Example:
 *   { section: "Travel", photos: [
 *     { src: "/photos/tokyo-sunset.jpg", alt: "Sunset over Shibuya" },
 *     { src: "/photos/kyoto-temple.jpg", alt: "Morning at Kinkaku-ji" },
 *   ]},
 */
export const heroPhotos = [
  {
    id: "mountain",
    src: "/photos/A7A8E7C8-FCCE-4E9E-8184-619EC6D5D2BD_1_102_a.jpeg",
    alt: "Evan overlooking the mountains and Vancouver",
  },
  {
    id: "phone-booth",
    src: "/photos/719B2C87-9A93-4145-B603-663A534FF0DA_1_102_a.jpeg",
    alt: "Evan at a green phone booth in a city street",
  },
  {
    id: "cats",
    src: "/photos/760347FD-85BE-4261-BB2F-9E264918E643_1_105_c.jpeg",
    alt: "Evan relaxing with two cats",
  },
  {
    id: "cheese",
    src: "/photos/F3B51F78-075D-4F08-BECC-14DD5B7267AD_1_105_c.jpeg",
    alt: "Evan enjoying a cheese pull at a restaurant",
  },
];

// Add a short caption between the quotation marks on any photo below.
export const photoSections = [
  {
    photos: [
      {
        id: "cabin-friends",
        src: "/photos/group-friends-cabin.jpg",
        alt: "Evan and friends sitting outside a cabin",
        caption: "Graduation Retreat",
        layout: "journal-photo--portrait",
      },
      {
        id: "team-event",
        src: "/photos/image.png",
        alt: "A group at an event wearing matching sweatshirts",
        caption: "BizTech Product+ Event",
        layout: "journal-photo--featured",
      },
      {
        id: "large-group",
        src: "/photos/A66A901F-492D-4C89-A117-61F606BCAF6B.JPG",
        alt: "A large group of friends posing outside",
        caption: "Product Management Club Retreat",
        layout: "journal-photo--pmc",
      },
      {
        id: "night-out",
        src: "/photos/image%20copy.png",
        alt: "Evan and friends on a night out",
        caption: "BUCS Community Team",
        layout: "journal-photo--night-out",
      },
      {
        id: "award-team",
        src: "/photos/3501846C-3803-4890-9C37-C26A14882D4C.jpeg",
        alt: "Evan and teammates at an award ceremony",
        caption: "1st Place at UBC Ace the Case",
      },
      {
        id: "restaurant-friends",
        src: "/photos/3578D5B1-F3EB-4168-914F-0C0A5D9F1367.jpeg",
        alt: "Evan with friends at a restaurant",
        caption: "Japan Trip",
      },
      {
        id: "pizza-night",
        src: "/photos/4EB0AF6B-1C1D-4748-8B27-D142EB31DC30_1_102_o.jpeg",
        alt: "Evan and friends sharing pizza",
        caption: "c̓əsnaʔəm House Residence Advisors",
        layout: "journal-photo--residence",
      },
    ],
  },
];
