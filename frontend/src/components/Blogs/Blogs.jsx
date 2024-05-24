import Heading from "../Shared/Heading";

// import images
import Img1 from "../../assets/blogs/noticia1.avif";
import Img2 from "../../assets/blogs/noticia2.jpeg";
import Img3 from "../../assets/blogs/noticia3.jpg";

const BlogData = [
    {
        title: "Titulo noticia 1",
        subtitle: "Subtitulo corto de la noticia 1",
        published: "Fecha publicacion",
        image: Img1,
    },
    {
        title: "Titulo noticia 2",
        subtitle: "Subtitulo corto de la noticia 2",
        published: "Fecha publicacion",
        image: Img2,
    },
    {
        title: "Titulo noticia 3",
        subtitle: "Subtitulo corto de la noticia 3",
        published: "Fecha publicacion",
        image: Img3,
    },
]

const Blogs = () => {
  return (
    <div className="my-12">
        <div className="container">
            {/* Header section */}
            <Heading title="Noticias Recientes" subtitle={"Explora nuestros blogs"} />
            {/* Blog section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {/* Blog card */}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className="bg-white dark:bg-gray-900">
                            {/* Image section */}
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img src={data.image} alt=""  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"/>
                            </div>
                            {/* Content section */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default Blogs;