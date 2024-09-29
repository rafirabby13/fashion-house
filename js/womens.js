const womensProducts = async ()=>{
  let data = await apiFunction2()
  
  elementById('main').innerHTML='';

  data?.filter((data) => {
    // console.log(data.category =="men's clothing");
    if (data.category =="women's clothing") {
       elementCards(data)
    }
    
  });
}
