
export interface Agent {
    name: string;
    title: string;
    phone: string;
    email: string;
    description: string;
    image: {
      url: string;
    } // Antager at der er en URL til billede
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
    netto: number;
    livingspace: number;
    lotsize: number;
    payment: number;
    rooms: string;
    lat: number;
    long: number;
    built: number;
    remodel: number;
    basementsize:number;
    cost: number;
  }
  