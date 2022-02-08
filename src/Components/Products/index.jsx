import React, {useState, useEffect} from 'react'
const Products = () =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
      const fethProducts = async () =>{
          try{
            const response  = await fetch('http://localhost:3000/products')
            console.log(response)
          }catch(error){
         console.error(error)
          }
          
      }
      fethProducts()
    },[])
    return(
        <>
        </>
    )
}
export default Products