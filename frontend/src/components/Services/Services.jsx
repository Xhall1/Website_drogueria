
import{
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
        title: "Domicilio gratis",
        description: "En todos los productos",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
        title: "Ahorra dinero",
        description: "Aprovecha nuestros descuentos",
    },
    {
        id: 3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
        title: "Pago seguro",
        description: "Todos los pagos asegurados",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
        title: "Servicio 24/7",
        description: "Atendemos todo el dia 24/7",
    },
];

const Services = () => {
  return (
   <div>
        <div className="container mt-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    ServiceData.map((data) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex flex-col items-start sm:flex-row gap-4">
                            {data.icon}
                            <div>
                                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                                <h1 className="text-gray-400 text-sm">{data.description}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
};

export default Services;