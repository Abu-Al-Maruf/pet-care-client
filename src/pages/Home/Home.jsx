const Home = () => {
  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row items-center gap-x-10 justify-between py-20 px-10 bg-orange-100/50">
      <div className="flex-1 space-y-7">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-orange-500">
          Get Your Organic Pet Food
        </h1>
        <p className="text-xl font-light">
          Your Pet deserves a best quality food and healthy snacks. So, we have
          the best pet food to offer with affordable price.
        </p>
        <button className="btn bg-orange-500 text-white  hover:text-orange-500">
          SHOP NOW
        </button>
      </div>
      <div className="flex-1">
        <img
          src="https://www.sgs.com/-/media/sgscorp/images/health-and-nutrition/dog-food-in-bowl-and-dog-biscuits.cdn.en-BD.1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
