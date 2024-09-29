const homeProducts = async () => {
  // let data = await apiFunction2();
  const api = await fetch("../ranga-api.json");
  const data = await api.json();

  elementById("main").innerHTML = "";

  data?.map((data) => {
    // console.log(data.category =="men's clothing");

    // let randomNumber = Math.floor(Math.random() * 10) + 10;
    // console.log(randomNumber);

    // if (data.id === randomNumber) {
    //   console.log(randomNumber);
    //   elementCards(data);
    // }
    elementCards(data)
  });
};
homeProducts();
