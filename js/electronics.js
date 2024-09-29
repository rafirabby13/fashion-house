const electronisProducts = async ()=>{
  let data = await apiFunction2()
  elementById('main').innerHTML='';
  data?.filter((data) => {
    // console.log(data.category =="men's clothing");
    if (data.category =="electronics") {
       elementCards(data)
    }
    
  });
}
