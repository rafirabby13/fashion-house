const jeweleryProducts = async ()=>{
  let data = await apiFunction2()
  elementById('main').innerHTML='';
  data?.filter((data) => {
    if (data.category =="jewelery") {  
        elementCards(data)
        
    }
    
  });
}
