export type Occasion = {
  id: "everyday" | "casual" | "outerwear" | "artisan" | "loungewear" | "business";
  title: string;
  description: string;
  icon: string;
};

const occasions: Occasion[] = [
  {
    id: "everyday",
    title: "Everyday",
    description: "Versatile pieces for daily wear",
    icon: "shirt"
  },
  {
    id: "casual",
    title: "Casual",
    description: "Relaxed and comfortable styles",
    icon: "t-shirt"
  },
  {
    id: "outerwear",
    title: "Outerwear",
    description: "Jackets, coats and weather protection",
    icon: "umbrella"
  },
  {
    id: "artisan",
    title: "Artisan",
    description: "Handcrafted and unique pieces",
    icon: "scissors"
  },
  {
    id: "loungewear",
    title: "Loungewear",
    description: "Comfortable clothing for home",
    icon: "coffee"
  },
  {
    id: "business",
    title: "Business",
    description: "Professional attire for work",
    icon: "briefcase"
  }
];

export default occasions;