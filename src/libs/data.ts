// data.ts

// Define the type for the URLs
interface Urls {
  price: string;
  tos: string;
  howtoorder: string;
  waitinglist: string;
}

// Define the type for the site structure
interface Site {
  name: string;
  path: string;
  url: Urls;
}

// Define the type for the Linked object
interface LinkedType {
  sites: {
    [key: string]: Site;
  };
}

// Create the Linked object with explicit type annotation
export const Linked: LinkedType = {
  sites: {
    simpleweb: {
      name: "Simple Web",
      path: "/simpleweb",
      url: {
        price: "/simpleweb/price",
        tos: "/simpleweb/tos",
        howtoorder: "/simpleweb/howtoorder",
        waitinglist: "/simpleweb/waitinglist"
      }
    },
    landingpage: {
      name: "Landing Page",
      path: "/landingpage",
      url: {
        price: "/landingpage/price",
        tos: "/landingpage/tos",
        howtoorder: "/landingpage/howtoorder",
        waitinglist: "/landingpage/waitinglist"
      }
    },
    portfolio: {
      name: "Portfolio",
      path: "/portfolio",
      url: {
        price: "/portfolio/price",
        tos: "/portfolio/tos",
        howtoorder: "/portfolio/howtoorder",
        waitinglist: "/portfolio/waitinglist"
      }
    },
    costumecard: {
      name: "Costume Card",
      path: "/costumecard",
      url: {
        price: "/costumecard/price",
        tos: "/costumecard/tos",
        howtoorder: "/costumecard/howtoorder",
        waitinglist: "/costumecard/waitinglist"
      }
    }
  }
};
