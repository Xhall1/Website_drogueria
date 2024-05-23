
import Image1 from "../../assets/category/acetaminofen.png";
import Button from "../Shared/Button";


const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-4 gap-8">
                {/* first col*/}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px]
                flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-400">Lleva</p>
                            <p className="text-4xl font-semibold mb-[120px]">
                                Acetaminofén</p>
                            <Button 
                            text = "Comprar"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt=""
                    className="w-[340px] absolute
                    bottom-0" />
                </div>
                {/* second col*/}

                {/* third col*/}
            </div>
        </div>
    </div>
  );
};

export default Category;