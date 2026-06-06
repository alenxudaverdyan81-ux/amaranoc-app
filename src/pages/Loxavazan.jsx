import React from "react";


export default function Loxavazan({ offers }) {
  const poolOffers = offers.filter((item) => item.hasPool === true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        
        <aside className="w-full md:w-[300px] shrink-0">
          <Sidebar />
        </aside>

        <main className="flex-1">
          <div className="mb-6 border-b pb-4 flex gap-6 text-sm text-gray-500 overflow-x-auto">
            <span className="cursor-pointer hover:text-orange-500">Ամարանոցներ</span>
            <span className="cursor-pointer hover:text-orange-500">Frame houses</span>
            <span className="cursor-pointer hover:text-orange-500">Տնակներ</span>
            <span className="cursor-pointer text-orange-500 font-semibold border-b-2 border-orange-500 pb-4 -mb-[18px]">
              Փակ լողավազան
            </span>
          </div>

          <h2 className="text-xl font-bold text-center my-8 tracking-wider text-gray-900">
            ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ
          </h2>

          {poolOffers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {poolOffers.map((item) => (
                <Card
                  key={item.id}
                  location={item.location}
                  price={item.price}
                  capacity={item.capacity}
                  image={item.img}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 border rounded-lg bg-white shadow-sm">
              <p className="text-lg">Այս բաժնի հայտարարությունները դեռ դատարկ են։</p>
            </div>
          )}

          {poolOffers.length > 0 && (
            <div className="flex justify-center mt-10">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-orange-600 transition">
                Ցուցադրել ավելին
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}