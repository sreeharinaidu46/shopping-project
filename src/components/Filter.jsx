import {useState} from 'react'
import './Filter.css'
const Filter=({activeFilters,onFilterChange})=>{
    const filterOptions={
        type:["shirt", "hoodie", "sweatshirt", "v-neck"],
        material:["cotton", "satin", "velvet", "polyester"],
        gender:["male", "female", "unisex"]
}
const handleFilterChange=(filterCategory,filterValue)=>{
    const isCurrentlyActive = activeFilters[filterCategory].includes(filterValue)
    const newCategoryFilters = isCurrentlyActive ? activeFilters[filterCategory].filter(value => value!==filterValue) : [...activeFilters[filterCategory],filterValue];
    onFilterChange({
        ...activeFilters,
        [filterCategory]:newCategoryFilters
    })

}

    return(
    <>
    <div style={{padding:30,border:'1px solid red'}}>
        <h2>Filters</h2>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            {Object.entries(filterOptions).map(([category,values])=>(
                <div key={`${category}-${values}`}>
                    <h4>{category}</h4>
                    {values.map((val)=>(
                        <div key={category} className='filter-label-container'>
                        <p className={`filter-labels ${activeFilters[category].includes(val) ? 'selected' : ''}`} onClick={()=>handleFilterChange(category,val)}>{val}</p>
                        </div>
                    ))}
                    </div>
            ))}
        </div>
    </div>
    </>
    )
}
export default Filter;