
export interface Agent {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: string; // Antager at der er en URL til billede
  }
  
  export interface Image {
    url: string;
    alt?: string;
  }
  
  export interface House {
    id: string;
    adress1: string;
    adress2: string;
    city: string;
    postalcode: number;
    price: number;
    description: string;
    energylabel: string;
    floorplan: {
      name: string;
      url: string;
    };
    images: Image[];
    agent: Agent;
    gross: number;
    livingspace: number;
    lotsize: number;
    payment: number;
    rooms: string;
    lat: number;
    long: number;
    build: number;
    remodel: number;
  }
  