import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "images/hats.png",
      backgroundColor: "#d1c4e9",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "images/jackets.png",
      backgroundColor: "#c5cae9",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "images/sneakers.png",
      backgroundColor: "#bbdefb",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "images/womens.png",
      backgroundColor: "#b2ebf2",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "images/men.png",
      backgroundColor: "#b2dfdb",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;