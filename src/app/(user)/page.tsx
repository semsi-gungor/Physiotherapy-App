import { FC } from "react";
import Header from "@/components/main/header/Header";
import MainWrapper from "@/components/ui/main-wrapper/MainWrapper";
import ServiceCardContainer from "@/components/main/services-section/ServiceCardContainer";
import ServiceHeader from "@/components/main/services-section/ServiceHeader";
import Entrance from "@/components/main/entrance/Entrance";
import Familiar from "@/components/main/familiar/Familiar";
import Promises from "@/components/main/promises/Promises";
import BlogPosts from "@/components/main/blog/BlogPosts";
import Comments from "@/components/main/new-comments/Comments";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "LAVİNİS Egzersiz ve Danışmanlık Merkezi olarak danışanlarımızın yaşam kalitesini artırmak ve onlara ağrısız bir yaşam sunmak için profesyonel bir çatı altında 2020 yılında hizmet hayatına başladık.LAVİNİS bünyesinde; Reformer Pilates, Hamile Pilatesi, Yogaterapi, Manuel Terapi, Pelvik Taban Rehabilitasyonu, 3 Boyutlu Skolyoz Egzersizleri, Lenfödem Rehabilitasyonu, Kanser Sonrası Egzersiz Danışmanlığı, Dans ve Zumba hizmetlerini vermekteyiz.",
};

const Home: FC = ({}) => {
  return (
    <main>
      <Header />
      <Entrance />
      <Familiar />
      <Promises />
      <ServiceHeader />
      <MainWrapper>
        <ServiceCardContainer />
      </MainWrapper>
      <BlogPosts />
      <Comments />
    </main>
  );
};

export default Home;
