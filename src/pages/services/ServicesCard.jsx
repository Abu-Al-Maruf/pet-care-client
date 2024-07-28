import PropTypes from "prop-types";

const ServicesCard = ({ service }) => {
  const { img, availability, brand, name, price } = service;
  return (
    <div className="border rounded-lg p-2 h-[370px] shadow-md transition-transform transform hover:shadow-lg duration-300 ease-in-out max-w-sm mx-auto">
      <div className="p-2">
        <img
          src={img}
          alt={name}
          className="w-auto mx-auto h-44 object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-1">{name}</h2>
        <p className="text-gray-500 mb-1 text-sm sm:text-md">
          <span className="font-semibold">Brand</span>: {brand}
        </p>
        <p className="text-gray-500 mb-1 text-sm sm:text-md">
          <span className="font-semibold">Stock</span>: {availability}
        </p>
        <p className="text-gray-500 mb-1 text-sm sm:text-md ">
          <span className="font-semibold ">Price</span>:{" "}
          <span className="text-red-600">{price}&#2547;</span>;
        </p>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServicesCard;
