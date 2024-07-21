interface Urls {
  price: string;
  tos: string;
  howtoorder: string;
  waitinglist: string;
}
interface Site {
  name: string;
  path: string;
  url: Urls;
}

interface LinkedType {
  sites: {
    [key: string]: Site;
  };
}

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

interface SosmedSite {
  name: string;
  url: string;
}

interface SosmedType {
  sites: {
    [key: string]: SosmedSite;
  };
}

export const Sosmed: SosmedType = {
  sites: {
    facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/nagatsu.akiza"
    },
    twitter: {
      name: "X",
      url: "https://x.com/nagatsuakiza"
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/nagatsuakiza"
    },
    youtube: {
      name: "YouTube",
      url: "https://www.youtube.com/@NagatsuAkiza"
    }
  }
};
