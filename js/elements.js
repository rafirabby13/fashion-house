function elementCards(data){
    let main = elementById("main");
    let div = document.createElement("div");
    const { title, price, category, description, rating, image } = data;
    div.innerHTML = `
                <div class="card bg-base-100 w-96 shadow-xl px-4 py-8">
              <figure class="mb-auto h-80 p-8 border-4">
                <img class="p-8  "
                  src=${image}
                  alt="Shoes" />
              </figure>
              <div class="card-body ">
                <h2 id="title" class="card-title font-bold text-2xl">
                  ${title.slice(0, 20)}...
                  
                </h2>
                <p id="description">${description.slice(0, 130)}...</p>
                <h1 id="price" class=" text-2xl">Price: <span class="font-bold">${price}</span></h1>
                <div class="card-actions justify-end mt-auto">
                  <div id="category" class="badge badge-outline p-3">${category}</div>
                  <div class="badge badge-outline p-3">Ratings: ${
                    rating.rate
                  }</div>
                </div>
              </div>
            </div>
                `;
                div.classList.add("flex");
                div.classList.add("mx-auto");
                main.appendChild(div);
}