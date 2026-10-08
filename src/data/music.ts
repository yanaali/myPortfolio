export type MusicRelease = {
  id: string;
  title: string;
  kind: "Album" | "Mixtape";
  year: number;
  released: string;
  tracks: number;
  duration: string;
  cover: string;
  accent: string;
  spotifyId: string;
};

export const musicArtist = {
  name: "yanaali",
  spotify: "https://open.spotify.com/artist/07aKpXxqGKl3YQ7iSzKtui",
};

// Titles, dates, track counts, artwork, and IDs verified against Spotify.
// Affection Hours is presented as a mixtape, as the artist describes it.
export const musicReleases: MusicRelease[] = [
  {
    id: "affection-hours", title: "affection hours: The Playlist", kind: "Mixtape",
    year: 2025, released: "December 20, 2025", tracks: 11, duration: "32 min",
    cover: "/assets/music/affection-hours.jpg", accent: "#e75b45",
    spotifyId: "2y4bAtZNgCMuvnc8cdwgAx",
  },
  {
    id: "everything-all-together", title: "everything all together", kind: "Album",
    year: 2025, released: "December 12, 2025", tracks: 13, duration: "56 min",
    cover: "/assets/music/everything-all-together.jpg", accent: "#d86b3c",
    spotifyId: "2p21tnrJBndpm63ihOxu9m",
  },
  {
    id: "pages-from-a-typical-youth", title: "pages from a typical youth", kind: "Album",
    year: 2023, released: "August 3, 2023", tracks: 14, duration: "52 min",
    cover: "/assets/music/pages-from-a-typical-youth.jpg", accent: "#bca580",
    spotifyId: "48NBEHy9KSxeTbSaveLTtZ",
  },
  {
    id: "a-longing-for-unfamiliarity", title: "a longing for unfamiliarity", kind: "Album",
    year: 2022, released: "August 31, 2022", tracks: 15, duration: "45 min",
    cover: "/assets/music/a-longing-for-unfamiliarity.jpg", accent: "#3da5a0",
    spotifyId: "2aLU4iQU0FQIoHmFsCFuO8",
  },
  {
    id: "the-end-of-a-transient-happiness", title: "The End Of A Transient Happiness", kind: "Album",
    year: 2022, released: "January 14, 2022", tracks: 16, duration: "55 min",
    cover: "/assets/music/the-end-of-a-transient-happiness.jpg", accent: "#dca862",
    spotifyId: "4uRU3gLXaWnzHxHp5xQJxW",
  },
];
