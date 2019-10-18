const people = [
    {
      id: 1,
      name: "Johna",
      gender: "F",
      city: "Dedenëvo",
      country: "Russia",
      catchphrase: "Devolved heuristic service-desk",
      favorite_movie: "Tokyo Godfathers",
      movie_genre: "Adventure|Animation|Drama"
    },
    {
      id: 2,
      name: "Roderich",
      gender: "M",
      city: "San Andrés Villa Seca",
      country: "Guatemala",
      catchphrase: "Up-sized cohesive model",
      favorite_movie: "Slap Her... She's French (a.k.a. She Gets What She Wants)",
      movie_genre: "Comedy"
    },
    {
      id: 3,
      name: "Rayner",
      gender: "M",
      city: "Horní Suchá",
      country: "Czech Republic",
      catchphrase: "User-centric asynchronous hardware",
      favorite_movie: "My Boss's Daughter",
      movie_genre: "Comedy|Romance"
    },
    {
      id: 4,
      name: "Reinhard",
      gender: "M",
      city: "Shanggan",
      country: "China",
      catchphrase: "Focused composite challenge",
      favorite_movie: "Safety Not Guaranteed",
      movie_genre: "Comedy|Drama"
    },
    {
      id: 5,
      name: "Nonnah",
      gender: "F",
      city: "San Angelo",
      country: "United States",
      catchphrase: "Progressive homogeneous secured line",
      favorite_movie: "They Came Back (Les Revenants)",
      movie_genre: "Drama|Fantasy"
    },
    {
      id: 6,
      name: "Reinhard",
      gender: "M",
      city: "Viengxay",
      country: "Laos",
      catchphrase: "Down-sized local contingency",
      favorite_movie: "Speaking Parts",
      movie_genre: "Drama"
    },
    {
      id: 7,
      name: "Guendolen",
      gender: "F",
      city: "Louisville",
      country: "United States",
      catchphrase: "Profit-focused tangible task-force",
      favorite_movie: "How to Be",
      movie_genre: "Comedy|Drama"
    },
    {
      id: 8,
      name: "Ediva",
      gender: "F",
      city: "Nantes",
      country: "France",
      catchphrase: "Sharable multimedia strategy",
      favorite_movie: "The Hound of the Baskervilles",
      movie_genre: "Crime|Drama|Horror|Mystery"
    },
    {
      id: 9,
      name: "Pavia",
      gender: "F",
      city: "Kemiri Daya",
      country: "Indonesia",
      catchphrase: "Re-engineered stable challenge",
      favorite_movie: "Kamome Diner",
      movie_genre: "(no genres listed)"
    },
    {
      id: 10,
      name: "Fair",
      gender: "M",
      city: "Apóstoles",
      country: "Argentina",
      catchphrase: "Function-based transitional structure",
      favorite_movie: "True Heart",
      movie_genre: "Adventure|Children|Drama"
    },
    {
      id: 11,
      name: "Georgine",
      gender: "F",
      city: "San Andres",
      country: "Philippines",
      catchphrase: "Reduced dynamic pricing structure",
      favorite_movie: "Turner & Hooch",
      movie_genre: "Comedy|Crime"
    },
    {
      id: 12,
      name: "Terrell",
      gender: "M",
      city: "Los Tangos",
      country: "Honduras",
      catchphrase: "User-friendly analyzing data-warehouse",
      favorite_movie: "Chandni Chowk to China",
      movie_genre: "Action|Comedy"
    },
    {
      id: 13,
      name: "Theresina",
      gender: "F",
      city: "Castlerea",
      country: "Ireland",
      catchphrase: "Synergistic incremental solution",
      favorite_movie: "Malice in Wonderland",
      movie_genre: "Drama|Fantasy|Romance"
    },
    {
      id: 14,
      name: "Lucio",
      gender: "M",
      city: "Fukou",
      country: "China",
      catchphrase: "Virtual user-facing workforce",
      favorite_movie: "Across the Sea of Time",
      movie_genre: "Documentary|IMAX"
    },
    {
      id: 15,
      name: "Parrnell",
      gender: "M",
      city: "Cipicung Timur",
      country: "Indonesia",
      catchphrase: "Advanced heuristic approach",
      favorite_movie: "George and the Dragon",
      movie_genre: "Action|Adventure|Children|Comedy|Fantasy"
    },
    {
      id: 16,
      name: "Lonnard",
      gender: "M",
      city: "Zavolzh’ye",
      country: "Russia",
      catchphrase: "Fundamental intermediate focus group",
      favorite_movie: "Good Night, and Good Luck.",
      movie_genre: "Crime|Drama"
    },
    {
      id: 17,
      name: "Valle",
      gender: "M",
      city: "Novorossiysk",
      country: "Russia",
      catchphrase: "Proactive dedicated framework",
      favorite_movie: "My Wife is an Actress (Ma Femme est une Actrice)",
      movie_genre: "Comedy|Drama|Romance"
    },
    {
      id: 18,
      name: "Dunn",
      gender: "M",
      city: "Kamionka Wielka",
      country: "Poland",
      catchphrase: "Team-oriented heuristic internet solution",
      favorite_movie: "East Meets West (Dung sing sai tsau 2011)",
      movie_genre: "Comedy"
    },
    {
      id: 19,
      name: "Elijah",
      gender: "M",
      city: "Kiyevskoye",
      country: "Russia",
      catchphrase: "Reduced logistical encoding",
      favorite_movie: "Mad Bastards",
      movie_genre: "Drama"
    },
    {
      id: 20,
      name: "Neysa",
      gender: "F",
      city: "Breda",
      country: "Netherlands",
      catchphrase: "Diverse well-modulated protocol",
      favorite_movie: "Under Suspicion",
      movie_genre: "Crime|Drama|Thriller"
    },
    {
      id: 21,
      name: "Ketty",
      gender: "F",
      city: "Rantīs",
      country: "Palestinian Territory",
      catchphrase: "Universal mission-critical info-mediaries",
      favorite_movie: "Nadja",
      movie_genre: "Drama"
    },
    {
      id: 22,
      name: "Patrice",
      gender: "F",
      city: "Kanluran",
      country: "Philippines",
      catchphrase: "Progressive object-oriented encoding",
      favorite_movie: "Four Days of Naples, The (Le quattro giornate di Napoli)",
      movie_genre: "Drama|War"
    },
    {
      id: 23,
      name: "Garrek",
      gender: "M",
      city: "Coolock",
      country: "Ireland",
      catchphrase: "Future-proofed intangible hardware",
      favorite_movie: "Middle of Nowhere",
      movie_genre: "Comedy|Drama"
    },
    {
      id: 24,
      name: "Zedekiah",
      gender: "M",
      city: "Francisco Villa",
      country: "Mexico",
      catchphrase: "Multi-layered dedicated info-mediaries",
      favorite_movie: "Girl of Finland (Lapualaismorsian)",
      movie_genre: "Drama"
    },
    {
      id: 25,
      name: "Morena",
      gender: "F",
      city: "Vestmanna",
      country: "Faroe Islands",
      catchphrase: "Self-enabling attitude-oriented website",
      favorite_movie: "Calcium Kid, The",
      movie_genre: "Comedy"
    },
    {
      id: 26,
      name: "Flem",
      gender: "M",
      city: "Saronída",
      country: "Greece",
      catchphrase: "Cross-platform 5th generation adapter",
      favorite_movie: "South Park: Bigger, Longer and Uncut",
      movie_genre: "Animation|Comedy|Musical"
    },
    {
      id: 27,
      name: "Ibby",
      gender: "F",
      city: "Qiujia",
      country: "China",
      catchphrase: "De-engineered 24 hour monitoring",
      favorite_movie: "All the Colors of the Dark",
      movie_genre: "Horror|Mystery|Thriller"
    },
    {
      id: 28,
      name: "Diandra",
      gender: "F",
      city: "Whittlesea",
      country: "South Africa",
      catchphrase: "Open-source multi-tasking implementation",
      favorite_movie: "Seventh Seal, The (Sjunde inseglet, Det)",
      movie_genre: "Drama"
    },
    {
      id: 29,
      name: "Roanna",
      gender: "F",
      city: "Guolemude",
      country: "China",
      catchphrase: "Operative systematic parallelism",
      favorite_movie: "No Time For Sergeants",
      movie_genre: "Adventure|Comedy|War"
    },
    {
      id: 30,
      name: "Lotta",
      gender: "F",
      city: "Kaum Kaler",
      country: "Indonesia",
      catchphrase: "Organic 4th generation pricing structure",
      favorite_movie: "Samurai I: Musashi Miyamoto (Miyamoto Musashi)",
      movie_genre: "Action|Adventure|Drama"
    }
  ];
  module.exports = people