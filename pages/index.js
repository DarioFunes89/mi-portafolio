import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Darío Andrés Funes - Fullstack Developer"
      description="Mi portafolio"
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
};
