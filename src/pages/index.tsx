import HTMLContent from "@/components/commons/HTMLContent/HTMLContent";
import Navbar from "@/components/commons/Navbar";
import PageHead from "@/components/commons/PageHead";
import BottomPage from "@/components/views/BottomPage";
import CardPage from "@/components/views/CardPage";
import MenuPage from "@/components/views/MenuPage";

export default function Home() {
  return (
    <>
      <PageHead title="flexFord" />
      <div className="w-full lg:h-[700px] relative overflow-hidden flex flex-col bg-black ">
        <div
          className="absolute inset-0 bg-center lg:bg-cover -z-10 hidden lg:block"
          style={{
            backgroundImage: "url('/images/homePage.png')",
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

        <Navbar />
        <CardPage />
      </div>

      <BottomPage />
      <div
        className="w-full h-fit bg-black"
        style={{ backgroundColor: "#151717" }}
      >
        <MenuPage />
      </div>
    </>
  );
}
