import { CallProduct } from './CallProduct'

export function Mvs({ products,setProducts,id }) {
  console.log(products);
  return (
    <section className="container">
    {products.map((pv,id)=>
      <CallProduct pv={pv} id={id} products={products} setProducts={setProducts}/>      
  )}
    </section>
  );
}
