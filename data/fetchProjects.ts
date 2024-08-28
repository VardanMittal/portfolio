export type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string;
};


export const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "/path-to-image.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: `
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics. <br /> <br /> Her songs often
        explore themes of tragic romance, glamour, and melancholia, drawing
        inspiration from both contemporary and vintage pop culture. With a
        career that has seen numerous critically acclaimed albums, Lana Del Rey
        has established herself as a unique and influential figure in the music
        industry, earning a dedicated fan base and numerous accolades.
      </p>
    `,
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/path-to-image.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: `
      <p>
        Metallica, an iconic American heavy metal band, is renowned for their
        powerful sound and intense performances that resonate deeply with their
        audience. Formed in Los Angeles, California, they have become a cultural
        icon in the heavy metal music industry. <br /> <br /> Their songs often
        reflect themes of aggression, social issues, and personal struggles,
        capturing the essence of the heavy metal genre. With a career spanning
        over four decades, Metallica has released numerous hit albums and
        singles that have garnered them a massive fan following both in the
        United States and globally.
      </p>
    `,
  },
];
