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
      path: "workspace/simpleweb",
      url: {
        price: "workspace/simpleweb/price",
        tos: "workspace/simpleweb/tos",
        howtoorder: "workspace/simpleweb/howtoorder",
        waitinglist: "workspace/simpleweb/waitinglist"
      }
    },
    landingpage: {
      name: "Landing Page",
      path: "workspace/landingpage",
      url: {
        price: "workspace/landingpage/price",
        tos: "workspace/landingpage/tos",
        howtoorder: "workspace/landingpage/howtoorder",
        waitinglist: "workspace/landingpage/waitinglist"
      }
    },
    portfolio: {
      name: "Portofolio",
      path: "workspace/portofolio",
      url: {
        price: "workspace/portofolio/price",
        tos: "workspace/portofolio/tos",
        howtoorder: "workspace/portofolio/howtoorder",
        waitinglist: "workspace/portofolio/waitinglist"
      }
    },
    costumecard: {
      name: "Costume Card",
      path: "workspace/costumecard",
      url: {
        price: "workspace/costumecard/price",
        tos: "workspace/costumecard/tos",
        howtoorder: "workspace/costumecard/howtoorder",
        waitinglist: "workspace/costumecard/waitinglist"
      }
    }
  }
};
