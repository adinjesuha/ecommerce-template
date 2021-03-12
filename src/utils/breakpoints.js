const size = {
  mobileS: "320px",
  mobile: "520px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1200px",
  desktop: "1440px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileL})`,
  mobile: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
