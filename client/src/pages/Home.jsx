import React from 'react'

import Navbar from '../components/Navbar'


/**
* @author sahil nishad
* @function Home
**/

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [products2, setProducts2] = React.useState([]);
  React.useEffect(() => {
		async function getProducts() {
			try {
				const res = await fetch("https://sears-40h2.onrender.com/products/65c5d513216f075027acbf8e/tvElectronics");
				const data = await res.json();
				console.log(res);
				setProducts(data.hotDeals);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	},[]);
  React.useEffect(() => {
		async function getProducts() {
			try {
				const res = await fetch("https://sears-40h2.onrender.com/products/65c63744c69908f6bf402bb1/tvElectronics");
				const data = await res.json();
				console.log(res);
				setProducts2(data.tvAndElectronics);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	},[]);
  

    
  return(
    <>
	<Navbar/>
	
    
    
    </>
   )
  }
export default Home