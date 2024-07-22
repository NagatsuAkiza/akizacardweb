import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IconType } from "react-icons";
import { FaSquareXTwitter } from "react-icons/fa6";

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
      name: "Portfolio",
      path: "workspace/portfolio",
      url: {
        price: "workspace/portfolio/price",
        tos: "workspace/portfolio/tos",
        howtoorder: "workspace/portfolio/howtoorder",
        waitinglist: "workspace/portfolio/waitinglist"
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

interface SosmedIcon {
  icon: IconType;
}

interface SosmedSite {
  name: string;
  url: string;
  icon: {
    [key: string]: SosmedIcon;
  };
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
      url: "https://www.facebook.com/nagatsu.akiza",
      icon: {
        default: {
          icon: AiFillFacebook
        }
      }
    },
    twitter: {
      name: "X",
      url: "https://x.com/nagatsuakiza",
      icon: {
        default: {
          icon: FaSquareXTwitter
        }
      }
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/nagatsuakiza",
      icon: {
        default: {
          icon: AiFillInstagram
        }
      }
    },
    youtube: {
      name: "YouTube",
      url: "https://www.youtube.com/@NagatsuAkiza",
      icon: {
        default: {
          icon: AiFillYoutube
        }
      }
    }
  }
};
