import { FC } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

//https://images.unsplash.com/photo-1552196563-55cd4e45efb3

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

const BlogHeader: FC = () => {
  return (
    <div className="w-full h-screen flex mb-24">
      <div className="lg:flex-1 mt-16 p-16">
        <div className="w-full h-full rounded-2xl grid place-items-center max-h-[50rem] overflow-clip">
          <h1
            className={`text-5xl md:text-8xl lg:text-8xl font-bold ${poppins.className} text-gray-900`}
          >
            BLOG YAZILARIMIZ
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex-1 relative md:block">
        <Image
          fill
          src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
          alt=" "
          objectFit="cover"
          quality={75}
        />
      </div>
    </div>

    // <Wrapper inpage>
    //   <div className={classes.container}>
    //     <Image
    //       src={bg}
    //       alt="background"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         objectFit: "cover",
    //         position: "absolute",
    //         zIndex: "-1",
    //       }}
    //       quality={100}
    //     />

    //     <motion.header
    //       initial={{ y: 10 }}
    //       animate={{ y: 0 }}
    //       className={classes.header}
    //     >
    //       <Image
    //         src={head}
    //         alt="background"
    //         style={{
    //           width: "105%",
    //           height: "100%",
    //           objectFit: "cover",
    //           position: "absolute",
    //           zIndex: "-1",
    //         }}
    //         quality={100}
    //       />
    //       <motion.h1 initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
    //         BLOG YAZILARIMIZ
    //       </motion.h1>
    //     </motion.header>
    //   </div>
    // </Wrapper>
  );
};

export default BlogHeader;
