import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const axios = useAxios();

  const getServices = () => {
    return axios.get("/services");
  };

  const {
    data: services,
    isLoading,
    error,
  } = useQuery({ queryKey: ["services"], queryFn: getServices });

  console.log(services?.data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p>Something Wrong: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 justify-between items-center py-20 px-10">
      {services?.data.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
