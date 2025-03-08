import CategoryButton from "../utitles/CategoryButton";
import Image from "next/image";
import Text from "@/app/components/utitles/text";
import ProductItem from "./ProductItem";

const ProductSectionDesktop = () => {
    return (
      <div className="bg-white rounded-2xl m-4 p-4 flex flex-col w-full">
        {/* Category Buttons & Add Review Button */}
        <div className="flex flex-row px-2 justify-between">
          <div className="flex space-x-4 py-1">
            {['Products', 'Articles', 'Reviews'].map((category, index) => (
              <CategoryButton
                key={index}
                text={category}
                defaultSelected={category === 'Products'}
              />
            ))} 
          </div>
          <div className="rounded-2xl cursor-pointer w-40 bg-gradient-to-r from-[#D20653] to-[#FF951D] flex flex-row items-center justify-center gap-3">
            <Image src="/plus.svg" alt="icon" width={25} height={25} />
            <p className="font-[var(--font-nunito)] text-[14px] text-white leading-[23px]">
              Add Review
            </p>
          </div>
        </div>
  
        {/* Product Title */}
        <div className="mt-6 mx-3 flex flex-row gap-3">
          <Text text="Products" color="black" size="32px" weight="700" />
          <Text text="( 12 )" color="#828282" size="14px" weight="400" />
        </div>
  
        {/* Product List */}
        <div className="mt-6 mx-3 flex flex-col gap-7 ">
          {productData.map((product, index) => (
            <ProductItem
              key={index}
              imageSrc={product.imageSrc}
              tagName={product.tagName}
              tagBgColor={product.tagBgColor}
              description={product.description}
              price={product.price}
              timeLeft={product.timeLeft}
              initialLiked={product.initialLiked}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const productData = [
    {
      imageSrc: "/cloth.svg",
      tagName: "Live Action",
      tagBgColor: "#D20653",
      description: "Six-piece clothing set (blouse - pants - hat and more...",
      price: "1000 EGP",
      timeLeft: { days: 2, hours: 10, minutes: 50 },
      initialLiked: true,
    },
    {
      imageSrc: "/clothes2.svg",
      tagName: "Hot Sale",
      tagBgColor: "#FF951D",
      description: "Six-piece clothing set (blouse - pants - hat and more...",
      price: "2000 EGP",
      timeLeft: { days: 2, hours: 10, minutes: 50 },
      initialLiked: false,
    },
    {
      imageSrc: "/cloth.svg",
      tagName: "Live Action",
      tagBgColor: "#D20653",
      description: "Six-piece clothing set (blouse - pants - hat and more...",
      price: "1000 EGP",
      timeLeft: { days: 2, hours: 10, minutes: 50 },
      initialLiked: true,
    },
    {
      imageSrc: "/clothes2.svg",
      tagName: "Hot Sale",
      tagBgColor: "#FF951D",
      description: "Six-piece clothing set (blouse - pants - hat and more...",
      price: "2000 EGP",
      timeLeft: { days: 2, hours: 10, minutes: 50 },
      initialLiked: false,
    },
    {
        imageSrc: "/clothes2.svg",
        tagName: "Hot Sale",
        tagBgColor: "#FF951D",
        description: "Six-piece clothing set (blouse - pants - hat and more...",
        price: "2000 EGP",
        timeLeft: { days: 2, hours: 10, minutes: 50 },
        initialLiked: false,
      },
  ];
  
  export default ProductSectionDesktop;
  