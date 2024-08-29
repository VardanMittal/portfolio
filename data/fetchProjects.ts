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
    description: "Robofest 3.0",
    title: "Raksh- A fully automatic pesticide spraying robot",
    src: "/projects/raksh.jpg",
    ctaText: "Visit",
    ctaLink:
      "https://github.com/VardanMittal/RAKSH-Autonomous-Pesticide-Spraying-Robot",
    content: `
      <p>
        At Robofest 3.0 organized by Gujcost, I led the development of RAKSH, an advanced autonomous pesticide spraying robot designed to revolutionize precision agriculture. RAKSH is engineered to carry up to 10 distinct pesticides, leveraging real-time disease detection to intelligently select and apply the most effective treatment. With IMU-guided and vision-assisted navigation, RAKSH autonomously traverses complex terrains with precision. Its integration of vision algorithms enables rapid and accurate disease identification, ensuring timely intervention for optimal crop health. My contributions encompassed comprehensive system integration, algorithmic innovation, and collaborative management, highlighting my dedication to merging engineering disciplines for pioneering sustainable agricultural solutions and advancing global food security.
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
