const apiFunction = async ()=>{
    let data = await apiFunction2()
  elementById('main').innerHTML='';

    data.map(data=>{
      elementCards(data)

            
           
    })

}

