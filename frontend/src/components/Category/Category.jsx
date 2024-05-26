import Image1 from "../../assets/category/acetaminofen.png";
import Image2 from "../../assets/category/loratadina.png";
import Image3 from "../../assets/category/amoxicilina.png";
import Button from "../Shared/Button";

const Category = () => {
  const handleBuyButtonClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-brandRed/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Lleva</p>
                <p className="text-4xl font-semibold mb-[120px]">Acetaminofén</p>
                <a href="https://www.facebook.com/messages/t/363551983504889" target="_blank" rel="noopener noreferrer">
                  <Button
                    text="Comprar"
                    bgColor={"bg-brandRed"}
                    textColor={"text-white"}
                    onClick={() => handleBuyButtonClick("https://www.facebook.com/messages/t/363551983504889")}
                  />
                </a>
              </div>
            </div>
            <img src={Image1} alt="" className="w-[340px] absolute bottom-0" />
          </div>
          {/* second col*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Lleva</p>
                <p className="text-4xl font-semibold mb-[120px]">Loratadina</p>
                <a href="https://www.facebook.com/messages/t/363551983504889" target="_blank" rel="noopener noreferrer">
                  <Button
                    text="Comprar"
                    bgColor={"bg-brandGreen"}
                    textColor={"text-white"}
                    onClick={() => handleBuyButtonClick("https://www.facebook.com/messages/t/363551983504889")}
                  />
                </a>
              </div>
            </div>
            <img src={Image2} alt="" className="w-[340px] absolute bottom-0" />
          </div>
          {/* third col*/}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Lleva</p>
                <p className="text-4xl font-semibold mb-[120px]">Amoxicilina</p>
                <a href="https://www.facebook.com/messages/t/363551983504889" target="_blank" rel="noopener noreferrer">
                  <Button
                    text="Comprar"
                    bgColor={"bg-brandYellow"}
                    textColor={"text-black"}
                    onClick={() => handleBuyButtonClick("https://www.facebook.com/messages/t/363551983504889")}
                  />
                </a>
              </div>
            </div>
            <img src={Image3} alt="" className="w-[400px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
