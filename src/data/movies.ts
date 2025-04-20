
export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  year: number;
  language: string[];
}

// Home page movies
export const featuredMovie = {
  id: 1,
  title: "Sacred Games",
  description: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
  imageUrl: "https://source.unsplash.com/random/1920x1080/?thriller",
  category: ["Crime", "Drama", "Thriller"],
  year: 2018,
  language: ["Hindi"],
};

export const trendingNowMovies = [
  {
    id: 2,
    title: "Delhi Crime",
    description: "Based on the Nirbhaya case, Delhi Crime follows the Delhi Police investigation into the finding of the men who perpetrated this crime.",
    imageUrl: "https://source.unsplash.com/random/800x450/?crime",
    category: ["Crime", "Drama"],
    year: 2019,
    language: ["Hindi"],
  },
  {
    id: 3,
    title: "The White Tiger",
    description: "A rich Indian family's driver uses his wit and cunning to escape from poverty and become an entrepreneur.",
    imageUrl: "https://source.unsplash.com/random/800x451/?drama",
    category: ["Drama", "Crime"],
    year: 2021,
    language: ["Hindi", "English"],
  },
  {
    id: 4,
    title: "Jamtara",
    description: "A group of small-town young men operate a lucrative phishing racket, until they come on the radar of the authorities.",
    imageUrl: "https://source.unsplash.com/random/800x452/?scam",
    category: ["Crime", "Drama"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 5,
    title: "Paatal Lok",
    description: "A cynical inspector is tasked with investigating a high-profile case, leading him to uncover a conspiracy.",
    imageUrl: "https://source.unsplash.com/random/800x453/?dark",
    category: ["Crime", "Drama", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 6,
    title: "Mirzapur",
    description: "A shocking incident at a wedding procession ignites a series of events entangling the lives of families in Mirzapur.",
    imageUrl: "https://source.unsplash.com/random/800x454/?gangster",
    category: ["Action", "Crime", "Drama"],
    year: 2018,
    language: ["Hindi"],
  },
  {
    id: 7,
    title: "Andhadhun",
    description: "A series of mysterious events takes place in the life of a blind pianist.",
    imageUrl: "https://source.unsplash.com/random/800x455/?mystery",
    category: ["Mystery", "Thriller"],
    year: 2018,
    language: ["Hindi"],
  },
];

export const popularInIndiaMovies = [
  {
    id: 8,
    title: "Ludo",
    description: "Four different stories about people whose lives are affected by the wily ways of fate and luck.",
    imageUrl: "https://source.unsplash.com/random/800x456/?colors",
    category: ["Comedy", "Drama"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 9,
    title: "Gunjan Saxena",
    description: "The life of Gunjan Saxena, the first female Indian air force pilot in combat.",
    imageUrl: "https://source.unsplash.com/random/800x457/?pilot",
    category: ["Biography", "Drama"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 10,
    title: "AK vs AK",
    description: "A filmmaker kidnaps a movie star's daughter and films the star's desperate search for his child in real-time.",
    imageUrl: "https://source.unsplash.com/random/800x458/?film",
    category: ["Drama", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 11,
    title: "Bulbbul",
    description: "A man returns home after years to find his brother's child bride now grown up and abandoned, and his ancestral village plagued by mysterious deaths.",
    imageUrl: "https://source.unsplash.com/random/800x459/?horror",
    category: ["Horror", "Mystery", "Drama"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 12,
    title: "Guilty",
    description: "When a college heartthrob is accused of rape, his girlfriend navigates feelings of doubt and guilt.",
    imageUrl: "https://source.unsplash.com/random/800x460/?guilt",
    category: ["Drama", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 13,
    title: "Raat Akeli Hai",
    description: "When a newly married landlord is murdered, a misfit cop's investigation turns up secrets and suspects.",
    imageUrl: "https://source.unsplash.com/random/800x461/?night",
    category: ["Crime", "Mystery"],
    year: 2020,
    language: ["Hindi"],
  },
];

export const hindiMoviesAndShows = [
  {
    id: 14,
    title: "Haseen Dillruba",
    description: "A woman becomes the main suspect after her husband dies in an explosion.",
    imageUrl: "https://source.unsplash.com/random/800x462/?love",
    category: ["Mystery", "Romance"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 15,
    title: "Choked",
    description: "A bank employee weighed down by debt finds a cache of cash in her home's drainage system.",
    imageUrl: "https://source.unsplash.com/random/800x463/?money",
    category: ["Drama", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 16,
    title: "Tribhanga",
    description: "Three generations of women navigate complex familial relationships.",
    imageUrl: "https://source.unsplash.com/random/800x464/?women",
    category: ["Drama"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 17,
    title: "Class of '83",
    description: "A police officer trains five lethal assassin policemen to wipe out crime in a chaotic city.",
    imageUrl: "https://source.unsplash.com/random/800x465/?police",
    category: ["Action", "Crime", "Drama"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 18,
    title: "Pagglait",
    description: "A young widow begins to discover herself after her husband's death.",
    imageUrl: "https://source.unsplash.com/random/800x466/?grief",
    category: ["Comedy", "Drama"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 19,
    title: "Serious Men",
    description: "An ambitious but frustrated father capitalizes on his son's newfound fame as a boy-genius.",
    imageUrl: "https://source.unsplash.com/random/800x467/?genius",
    category: ["Comedy", "Drama"],
    year: 2020,
    language: ["Hindi"],
  },
];

// TV Shows page movies
export const tvShowsFeatured = {
  id: 20,
  title: "The Family Man",
  description: "A middle-class man juggling his family responsibilities and a high-risk job as an intelligence officer.",
  imageUrl: "https://source.unsplash.com/random/1920x1081/?action",
  category: ["Action", "Comedy", "Drama"],
  year: 2019,
  language: ["Hindi"],
};

export const tvShowsTrending = [
  {
    id: 21,
    title: "Mismatched",
    description: "After being set up on a date, two very different people find themselves at a crossroads.",
    imageUrl: "https://source.unsplash.com/random/800x468/?young",
    category: ["Drama", "Romance"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 22,
    title: "Little Things",
    description: "A cohabiting couple in their 20s navigate the ups and downs of work, relationships, and facing modern life together.",
    imageUrl: "https://source.unsplash.com/random/800x469/?couple",
    category: ["Comedy", "Drama", "Romance"],
    year: 2016,
    language: ["Hindi"],
  },
  {
    id: 23,
    title: "Kota Factory",
    description: "A story of an IIT coaching institute preparing students for the entrance exam.",
    imageUrl: "https://source.unsplash.com/random/800x470/?study",
    category: ["Drama"],
    year: 2019,
    language: ["Hindi"],
  },
  {
    id: 24,
    title: "She",
    description: "An undercover assignment leads a timid female constable to discover her sexuality and inner power.",
    imageUrl: "https://source.unsplash.com/random/800x471/?undercover",
    category: ["Crime", "Drama", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 25,
    title: "Bard of Blood",
    description: "Political espionage thriller based on a fictional book of the same name.",
    imageUrl: "https://source.unsplash.com/random/800x472/?spy",
    category: ["Action", "Drama", "Thriller"],
    year: 2019,
    language: ["Hindi", "English"],
  },
];

export const tvShowsIndian = [
  {
    id: 26,
    title: "Aranyak",
    description: "Political ploys, personal agendas and a thirst for power drive a bitter rivalry between two officers investigating a high-profile case.",
    imageUrl: "https://source.unsplash.com/random/800x473/?forest",
    category: ["Crime", "Drama", "Mystery"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 27,
    title: "Bombay Begums",
    description: "Five women across generations navigate dreams, desires and disappointments in modern Mumbai.",
    imageUrl: "https://source.unsplash.com/random/800x474/?women",
    category: ["Drama"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 28,
    title: "Yeh Kaali Kaali Ankhein",
    description: "A mild-mannered man's life is upended when he becomes the object of affection of a powerful politician's daughter.",
    imageUrl: "https://source.unsplash.com/random/800x475/?dark",
    category: ["Drama", "Thriller"],
    year: 2022,
    language: ["Hindi"],
  },
  {
    id: 29,
    title: "Ray",
    description: "An anthology series based on the works of Satyajit Ray.",
    imageUrl: "https://source.unsplash.com/random/800x476/?anthology",
    category: ["Drama", "Thriller"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 30,
    title: "Decoupled",
    description: "A misanthropic writer and his entrepreneurial wife navigate life as a couple after they decide to separate.",
    imageUrl: "https://source.unsplash.com/random/800x477/?divorce",
    category: ["Comedy", "Drama"],
    year: 2021,
    language: ["Hindi", "English"],
  },
];

// Movies page movies
export const moviesFeatured = {
  id: 31,
  title: "RRR",
  description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
  imageUrl: "https://source.unsplash.com/random/1920x1082/?epic",
  category: ["Action", "Drama"],
  year: 2022,
  language: ["Telugu", "Hindi"],
};

export const moviesAction = [
  {
    id: 32,
    title: "Sooryavanshi",
    description: "Mumbai's Anti-Terrorism Squad chief battles against time to stop a terrorist attack on the city.",
    imageUrl: "https://source.unsplash.com/random/800x478/?police",
    category: ["Action", "Crime", "Drama"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 33,
    title: "Extraction",
    description: "A black market mercenary is hired to rescue the kidnapped son of an imprisoned international crime lord.",
    imageUrl: "https://source.unsplash.com/random/800x479/?action",
    category: ["Action", "Thriller"],
    year: 2020,
    language: ["English", "Hindi"],
  },
  {
    id: 34,
    title: "War",
    description: "An Indian soldier chases his mentor who has gone rogue after an unexpected kill.",
    imageUrl: "https://source.unsplash.com/random/800x480/?war",
    category: ["Action", "Thriller"],
    year: 2019,
    language: ["Hindi"],
  },
  {
    id: 35,
    title: "Baaghi 3",
    description: "A man embarks on a bloody rampage to save his kidnapped brother.",
    imageUrl: "https://source.unsplash.com/random/800x481/?fight",
    category: ["Action", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 36,
    title: "Malang",
    description: "A man embarks on a killing spree to seek revenge for his past.",
    imageUrl: "https://source.unsplash.com/random/800x482/?revenge",
    category: ["Action", "Romance", "Thriller"],
    year: 2020,
    language: ["Hindi"],
  },
];

export const moviesComedy = [
  {
    id: 37,
    title: "Shubh Mangal Zyada Saavdhan",
    description: "A romantic comedy about a gay couple trying to convince their traditional families to accept their relationship.",
    imageUrl: "https://source.unsplash.com/random/800x483/?rainbow",
    category: ["Comedy", "Romance"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 38,
    title: "Good Newwz",
    description: "Two couples with the same surnames pursue in-vitro fertilization and wait for their upcoming babies.",
    imageUrl: "https://source.unsplash.com/random/800x484/?baby",
    category: ["Comedy", "Drama"],
    year: 2019,
    language: ["Hindi"],
  },
  {
    id: 39,
    title: "Mimi",
    description: "A young woman agrees to be a surrogate for a foreign couple, changing her life forever.",
    imageUrl: "https://source.unsplash.com/random/800x485/?surrogate",
    category: ["Comedy", "Drama"],
    year: 2021,
    language: ["Hindi"],
  },
  {
    id: 40,
    title: "Panga",
    description: "A retired Kabaddi player attempts to make a comeback and fulfill her dream of representing India.",
    imageUrl: "https://source.unsplash.com/random/800x486/?sport",
    category: ["Drama", "Sport", "Comedy"],
    year: 2020,
    language: ["Hindi"],
  },
  {
    id: 41,
    title: "Dream Girl",
    description: "A small-town man who can imitate a female voice finds himself working at a call center.",
    imageUrl: "https://source.unsplash.com/random/800x487/?call",
    category: ["Comedy", "Romance"],
    year: 2019,
    language: ["Hindi"],
  },
];

// Profiles
export interface Profile {
  id: number;
  name: string;
  imageUrl: string;
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: "User 1",
    imageUrl: "https://source.unsplash.com/random/200x200/?avatar",
  }
];
