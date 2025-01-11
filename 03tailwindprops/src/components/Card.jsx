import React from "react";

function Card({channel, btnText}){

    return(
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://t4.ftcdn.net/jpg/09/57/09/03/360_F_957090337_MrcFCYT43dWMYc6APCzRpNlO7R4YsnOs.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest View</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {btnText || "Go Somewhere"}
            </span>
          </div>
        </div>
    </>
        )
}
export default Card;