import React from 'react';
import './CategoryDisplay.css';
import Item from '../item/Item';

const CategoryDisplay = ({ category, categoryProduct }) => {
    const categoryNames = {
        Produce: "Fresh Produce",
        FoodGrains: "Food Grains",
        Beverages: "Cool Beverages",
        Snacks: "Snacks & Branded Food",
        Hygiene: "Personal Hygiene",
        Cleaning: "Cleaning & Household",
        Dairy: "Dairy",
        Meat: "Fresh Meat",
    };

    return (
        <>
            <h2 className='categoryDisplay-h2'>
                {categoryNames[category] || category} Items
            </h2>

            <div className='categoryDisplay'>
                {categoryProduct.length > 0 ? (
                    categoryProduct.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            mass={item.mass}
                            newPrice={item.newPrice}
                            oldPrice={item.oldPrice}
                        />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </>
    )
}

export default CategoryDisplay
