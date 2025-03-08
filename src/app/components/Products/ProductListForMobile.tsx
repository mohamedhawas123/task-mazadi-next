import ProductItem from "./ProductItem";
import ProductItemForMobile from "./ProductItemForMobile";

const ProductListForMobile = ()=> {
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
    return (
       
        <div className="mt-6 mx-3 flex flex-col gap-20  ">
          {productData.map((product, index) => (
            <ProductItemForMobile
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
    )
}
export default ProductListForMobile