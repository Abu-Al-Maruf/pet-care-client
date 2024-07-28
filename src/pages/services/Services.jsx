import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ServicesCard from "./ServicesCard";
import { useState } from "react";

const Services = () => {
  const [sortByPrice, setSortByPrice] = useState("");
  const [byBrand, setByBrand] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const axios = useAxios();
  console.log(currentPage);

  const getServices = () => {
    return axios.get(
      `/services?sortField=price&sortOrder=${sortByPrice}&brand=${byBrand}&page=${currentPage}&limit=${itemsPerPage}`
    );
  };

  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["services", sortByPrice, byBrand, currentPage],
    queryFn: getServices,
  });

  // for pagination functinality
  const totalServices = services?.data?.count || 0;
  const itemsPerPage = 10;

  const totalPages = Math.ceil(totalServices / itemsPerPage);
  const pages = [...Array(totalPages).keys()];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) {
    <p>Something Wrong: {error}</p>;
  }

  return (
    <div className="py-10 relative">
      <div className="flex sm:w-1/4 w-2/3 gap-5 absolute right-0 ">
        <select
          onChange={(e) => setSortByPrice(e.target.value)}
          defaultValue={"selected"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={"selected"} disabled>
            Price
          </option>
          <option value="asc">From Low To High</option>
          <option value="desc">From High To Low</option>
        </select>
        <select
          defaultValue={"selected"}
          onChange={(e) => setByBrand(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={"selected"} disabled>
            Choose Brand
          </option>
          <option value="Whisker Lickin's">Whisker Lickin&apos;s</option>
          <option value="Nature's Best">Nature&#39;s Best</option>
          <option value="Feline Feast">Feline Feast</option>
          <option value="Bark Bite">Bark Bite</option>
          <option value="Purrfect Bites">Purrfect Bites</option>
          <option value="Canine Delights">Canine Delights</option>
          <option value="Ocean Feast">Ocean Feast</option>
          <option value="Healthy Paws">Healthy Paws</option>
        </select>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 justify-between items-center py-20 px-10">
            {services?.data?.result.map((service) => (
              <ServicesCard key={service._id} service={service}></ServicesCard>
            ))}
          </div>
          <div className="flex justify-center gap-1">
            <button onClick={handlePrePage} className="join-item btn btn-sm">
              «
            </button>

            {pages.map((page) => (
              <button
                onClick={() => {
                  setCurrentPage(page + 1);
                }}
                key={page}
                className={`${
                  currentPage === page + 1
                    ? "join-item btn btn-sm bg-green-500"
                    : "join-item btn btn-sm "
                }`}
              >
                {page + 1}
              </button>
            ))}
            <button onClick={handleNextPage} className="join-item btn btn-sm">
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
