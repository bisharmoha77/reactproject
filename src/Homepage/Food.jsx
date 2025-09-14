import React from "react";
function Food(){

    const dishes = [
  {
    id: 1,
    name: "Lumpia with Sauce",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    img: "https://images.unsplash.com/photo-1604908176997-8e4bb6d651f3", 
  },
  {
    id: 2,
    name: "Fish and Veggie",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    img: "https://images.unsplash.com/photo-1617196039897-5e8d29ea8123", 
  },
  {
    id: 3,
    name: "Tofu Chili",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    img: "https://images.unsplash.com/photo-1598515213348-2b7da3a2e7f2", 
  },
  {
    id: 4,
    name: "Egg and Cucumber",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    img: "https://images.unsplash.com/photo-1562967916-eb82221dfb36", 
  },
  {
    id: 5,
    name: "Pasta Delight",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 15,
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },
  {
    id: 6,
    name: "Chicken Curry",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 14,
    img: "https://images.unsplash.com/photo-1604908819484-9d3e9f4ecf05",
  },
  {
    id: 7,
    name: "Veggie Salad",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 10,
    img: "https://images.unsplash.com/photo-1572441710519-4a2b75b92cda",
  },
  {
    id: 8,
    name: "Grilled Steak",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 20,
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
  },
  {
    id: 9,
    name: "Shrimp Fried Rice",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 16,
    img: "https://images.unsplash.com/photo-1621996346565-df6f2fa14de3",
  },
  {
    id: 10,
    name: "Cheese Pizza",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    price: 13,
    img: "https://images.unsplash.com/photo-1601924572290-df6f2fa14de3",
  },
];

    return(
        <>
        return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Special Dishes</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-3xl shadow-md p-6 text-center relative"
          >
            {/* Dish Image */}
            <div className="relative flex justify-center mb-6">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
              <div className="absolute top-0 right-14 bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
                ${dish.price}
              </div>
            </div>

            {/* Dish Info */}
            <h3 className="text-lg font-semibold text-gray-800">
              {dish.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{dish.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
        
        </>
    )
}
export default Food