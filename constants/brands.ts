export type Brand = {
  id: string;
  name: string;
  location: string;
  description: string;
  categories: ("men" | "women" | "children")[];
  occasions: ("everyday" | "casual" | "outerwear" | "artisan" | "loungewear" | "business")[];
  imageUrl: string;
  website?: string;
};

const brands: Brand[] = [
  {
    id: "encircled",
    name: "Encircled",
    location: "Toronto, ON",
    description: "Ethical, versatile women's wear. Certified B Corp.",
    categories: ["women"],
    occasions: ["everyday", "business"],
    imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://encircled.ca"
  },
  {
    id: "miik",
    name: "Miik",
    location: "Toronto, ON",
    description: "Women's workwear. Sustainable bamboo-based fabrics.",
    categories: ["women"],
    occasions: ["business", "everyday"],
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://miik.ca"
  },
  {
    id: "franc",
    name: "Franc",
    location: "Toronto, ON",
    description: "Elevated basics. 100% made in Canada.",
    categories: ["women"],
    occasions: ["everyday", "casual"],
    imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://wearfranc.com"
  },
  {
    id: "spiritual-dada",
    name: "Spiritual Dada",
    location: "Vancouver, BC",
    description: "Slow fashion basics with playful aesthetics.",
    categories: ["women", "men"],
    occasions: ["everyday", "casual"],
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "leze-the-label",
    name: "Leze the Label",
    location: "Vancouver, BC",
    description: "Women's workwear made from recycled materials. Designed & sewn locally.",
    categories: ["women"],
    occasions: ["business", "everyday"],
    imageUrl: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://lezethelabel.com"
  },
  {
    id: "reigning-champ",
    name: "Reigning Champ",
    location: "Vancouver, BC",
    description: "Premium athletic and streetwear. Made in Canada.",
    categories: ["men"],
    occasions: ["casual", "loungewear"],
    imageUrl: "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://reigningchamp.com"
  },
  {
    id: "raised-by-wolves",
    name: "Raised by Wolves",
    location: "Ottawa, ON",
    description: "High-end streetwear. Manufacturing mainly in Canada.",
    categories: ["men", "women"],
    occasions: ["casual"],
    imageUrl: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://raisedbywolves.ca"
  },
  {
    id: "okayok",
    name: "OKAYOK",
    location: "Toronto, ON",
    description: "Playful gender-neutral streetwear. Made in-house in Toronto.",
    categories: ["men", "women"],
    occasions: ["casual"],
    imageUrl: "https://images.unsplash.com/photo-1583744946564-b52d01e7f922?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "anian",
    name: "Anian",
    location: "Victoria, BC",
    description: "Circular fashion with recycled wool. Made in BC.",
    categories: ["men", "women"],
    occasions: ["artisan", "outerwear"],
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://anianmfg.com"
  },
  {
    id: "birds-of-north-america",
    name: "Birds of North America",
    location: "Toronto, ON",
    description: "Colourful, structured women's garments. In-house Toronto studio.",
    categories: ["women"],
    occasions: ["artisan", "business"],
    imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://birdsofnorthamerica.com"
  },
  {
    id: "ursa-minor-studio",
    name: "Ursa Minor Studio",
    location: "Montreal, QC",
    description: "Timeless, ethically made women's wear.",
    categories: ["women"],
    occasions: ["artisan", "everyday"],
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "heidi-the-label",
    name: "Heidi the Label",
    location: "Calgary, AB",
    description: "Small-batch feminine wear made in Canada.",
    categories: ["women"],
    occasions: ["artisan", "business"],
    imageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "canadian-sweater-company",
    name: "Canadian Sweater Company",
    location: "Vancouver, BC",
    description: "Hand-knit Cowichan-style wool sweaters. Indigenous collaboration.",
    categories: ["men", "women"],
    occasions: ["outerwear"],
    imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kanuk",
    name: "Kanuk",
    location: "Montreal, QC",
    description: "Iconic cold-weather outerwear, made in Montreal.",
    categories: ["men", "women"],
    occasions: ["outerwear"],
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://kanuk.com"
  },
  {
    id: "moose-creek",
    name: "Moose Creek",
    location: "Winnipeg, MB",
    description: "Durable winterwear, made in Canada.",
    categories: ["men", "women"],
    occasions: ["outerwear"],
    imageUrl: "https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mary-young",
    name: "Mary Young",
    location: "Toronto, ON",
    description: "Inclusive lingerie, sustainably made.",
    categories: ["women"],
    occasions: ["loungewear"],
    imageUrl: "https://images.unsplash.com/photo-1518873197959-9c7453f893f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://maryyoung.com"
  },
  {
    id: "londre-bodywear",
    name: "Londre Bodywear",
    location: "Vancouver, BC",
    description: "Swim and bodywear from recycled materials, sewn in Vancouver.",
    categories: ["women"],
    occasions: ["loungewear"],
    imageUrl: "https://images.unsplash.com/photo-1519235624215-85175d5eb36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://londrebodywear.com"
  },
  {
    id: "wama-hemp-underwear",
    name: "Wama Hemp Underwear",
    location: "Montreal, QC",
    description: "Hemp-based ethical underwear. Manufactured in Canada.",
    categories: ["men", "women"],
    occasions: ["loungewear"],
    imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "petite-revery",
    name: "Petite Revery",
    location: "Vancouver, BC",
    description: "Playful children's clothing made in Canada.",
    categories: ["children"],
    occasions: ["everyday", "casual"],
    imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mini-mioche",
    name: "Mini Mioche",
    location: "Toronto, ON",
    description: "Organic kidswear, made locally.",
    categories: ["children"],
    occasions: ["everyday", "casual"],
    imageUrl: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "https://minimioche.com"
  }
];

export default brands;