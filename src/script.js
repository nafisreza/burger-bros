import { burgers } from "./data.js";

const burgersWrapper = document.querySelector('.card-wrapper');

class App {
    constructor(){
        this._getBurgersData();
    }

    _getBurgersData(){
        burgers.forEach((burger) => this._renderBurger(burger))
    }

    _renderBurger(burger){
      const html = `
      <div class="card-item m-5 shadow-md w-96">
      <div
        class="burger-img h-64 overflow-hidden flex justify-center items-center"
      >
        <img
          src=${burger.img}
          alt=${burger.title}
          class="w-full"
        />
      </div>

      <div class="card-description p-5 flex flex-col gap-2 items-start">
        <h1 class="card-title text-2xl font-semibold">
        ${burger.title}
        </h1>
        <p class="card-price text-md text-orange-500">${burger.price}</p>
        <button
          class="card-btn bg-orange-500 px-5 py-2 rounded-md text-white font-semibold hover:bg-gray-700 ease-in-out duration-300"
        >
          Buy Now!
        </button>
      </div>
    </div>`

    burgersWrapper.insertAdjacentHTML('afterbegin', html);
    }
}

const myApp = new App();

console.log(burgersWrapper)