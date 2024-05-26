import brand1 from "../../assets/brand/b-1.png"
import brand2 from "../../assets/brand/b-2.png"


const Partners = () => {
  return (
    <div data-aos="zoom-out" className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
            <div className="container">
                <div className="grid grid-cols-2 gap-3 place-items-center opacity-80">
                    <img src={brand1} alt="brand" className="w-[150px] dark:invert rounded-xl"/>
                    <img src={brand2} alt="brand" className="w-[150px] dark:invert rounded-xl"/>
                </div>
        </div>
    </div>
  );
};

export default Partners;