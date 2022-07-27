 
import React, { useEffect, useState } from 'react';



function App() {
  
  const [moneda, setMoneda] = useState([]);


  useEffect(() => {

    const consultaApi = async () => {


      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD";

      const resp = await fetch(url)
      const resultado = await resp.json();
       
      const arraMaxCripto = resultado.Data.map((critos) => {
          
        const cripto ={
          id:critos.CoinInfo.Id,
          nombre:critos.CoinInfo.FullName,
          maxValor:critos.CoinInfo.MaxSupply,

        }
        return cripto
      })
      setMoneda(arraMaxCripto);
    }
    consultaApi();
    
  }, [])
  console.log(moneda);
  
  return (
    <>
    <div className="App">
       
       <h1>hola</h1>
    </div>
    </>
  );
}

export default App;
