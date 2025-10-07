import {useState} from 'react'
import Filter from './Filter'
import './Products.css'
import ProductDetails from './ProductDetails'
const Products=(props)=>{
    console.log("inside products",props.data)
    const [activeFilters,setActiveFilters]=useState({
        type:[],
        material:[],
        gender:[]
})
const [cartItems,setCartItems]=useState([])
const [selectedProduct,setSelectedProduct]=useState(null)
const [isModel,setModel]=useState(false)

const newFilters=props.data && props.data.filter((val)=>{
    let prodType= activeFilters.type.length === 0 || activeFilters.type.includes(val.productType)
        let genType= activeFilters.gender.length === 0 || activeFilters.gender.includes(val.gender)
            let matType= activeFilters.material.length === 0 || activeFilters.material.includes(val.material)
            return prodType && genType && matType
})
const handleProductClick=(data)=>{
    setModel(!isModel)
    setSelectedProduct(data)

}
const onCloseModel=()=>{
     setModel(false)
    setSelectedProduct(null)
}
const addToCart=(prod)=>{
    console.log("before adding to cart",cartItems)
    setCartItems([...cartItems,prod])
    console.log("after add to cart",cartItems)
    setModel(false)
    setSelectedProduct(null)
}
const removeFromCart=(prod)=>{
    let newcartItems=cartItems.filter((data)=>data.id!==prod.id)
    setCartItems(newcartItems)
    console.log("after removing",cartItems)
    setModel(false)
    setSelectedProduct(null)
}

    return(
        <>
        {isModel && (
            <>
<ProductDetails onCloseModel={onCloseModel} onAddCart={addToCart} data={selectedProduct} onremoveCart={removeFromCart} cartData={cartItems}/>
            </>
        )}
        <Filter activeFilters={activeFilters} onFilterChange={setActiveFilters}  />
        <div style={{padding:30,margin:10,border:'1px solid green',display:'flex',justifyContent:'space-between'}}>
            <p>Total Items :  {newFilters.length}</p>
             <p>Total Cart Items : {cartItems.length}</p>
        </div>
        <div className='products-container'>
            {newFilters && newFilters.map((item)=>
            <div className='product-card' onClick={()=>handleProductClick(item)}>
                <div className='product-image'>
                    <img src={item.imageUrl}/>
                </div>
                <div className='product-details' style={{padding:20}}>
                    <h3 style={{fontWeight:'bold',fontStyle:'1.5rem'}}>{item.name}</h3>
                    <p>{item.description}</p>
                     <p style={{fontWeight:'bold',fontStyle:'1.5rem'}}>${item.price}</p>
                </div>
            </div>
            )}
        </div>
        </>
    )
}
export default Products