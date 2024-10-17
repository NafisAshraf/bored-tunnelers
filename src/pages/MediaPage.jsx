import React from "react";
import Page from "./Page";
import FeaturedSection from "../components/FeaturedSection";

const MediaPage = () => {
  const featuredItems = [
    {
      image: "https://placehold.co/800x400",
      logo: "https://placehold.co/600x400",
      date: "2021-10-01",
      title: "Featured Item 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.",
      link: "https://www.youtube.com/watch?v=fWENuDSu05Q",
    },
    {
      image: "https://placehold.co/800x400",
      logo: "https://placehold.co/600x400",
      date: "2021-11-01",
      title: "Featured Item 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.youtube.com/watch?v=fWENuDSu05Q",
    },
    {
      image: "https://placehold.co/800x400",
      logo: "https://placehold.co/600x400",
      date: "2021-12-01",
      title: "Featured Item 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.youtube.com/watch?v=fWENuDSu05Q",
    },
  ];
  console.log(featuredItems);

  return (
    <div>
      <Page pageTitle="Media Page" />
    </div>
  );
};

export default MediaPage;
