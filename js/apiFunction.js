const apiFunction2 = async ()=>{
    const api = await fetch("../ranga-api.json");
    const data = await api.json();
    // console.log(data);
    return data;
  
  }
