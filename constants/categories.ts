export type Category = {
  id: "men" | "women" | "children";
  title: string;
  description: string;
  imageUrl: string;
};

const categories: Category[] = [
  {
    id: "men",
    title: "Men",
    description: "Discover Canadian-made menswear",
    imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "women",
    title: "Women",
    description: "Explore Canadian-made womenswear",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "children",
    title: "Children",
    description: "Shop Canadian-made children's clothing",
    imageUrl: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default categories;