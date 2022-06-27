import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import products from '../data/AllProducts.json';
import CardTwo from '../components/Cards/CardTwo';

const Grid = () => {
    const [columns, setColumns] = useState(4);

  return (
    <div>
        <div className="all-productss">
        <Navbar />
        <div className="container">
            <div className="breadcrumb">
                <div className="breadcrumb-item">
                    Home
                </div>
                <div className="breadcrumb-item">
                    All
                </div>
            </div>
            <div className="filters">
                <div className="filter-item view">
                    <div className="filter-icon-container">
                        <span>View as</span>
                    </div>
                    <div className="filter-icon-container">
                        <button onClick={() => setColumns(2)} className={columns === 2 && "active"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="33" viewBox="0 0 19 33" fill="none">
                                <rect x="18.95" y="0.05" width="32.9" height="18.9" transform="rotate(90 18.95 0.05)" fill="white"/>
                                <rect x="16" y="2" width="29" height="4.5" transform="rotate(90 16 2)" fill="black"/>
                                <rect x="7.5" y="2" width="29" height="4.5" transform="rotate(90 7.5 2)" fill="black"/>
                                <rect x="18.95" y="0.05" width="32.9" height="18.9" transform="rotate(90 18.95 0.05)" stroke="black" stroke-width="0.1"/>
                            </svg>
                        </button>
                    </div>
                    <div className="filter-icon-container">
                        <button onClick={() => setColumns(3)} className={columns === 3 && "active"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="33" viewBox="0 0 26 33" fill="none">
                                <rect x="25.95" y="0.05" width="32.9" height="25.9" transform="rotate(90 25.95 0.05)" fill="white"/>
                                <rect x="23" y="2" width="29" height="4" transform="rotate(90 23 2)" fill="black"/>
                                <rect x="15" y="2" width="29" height="4" transform="rotate(90 15 2)" fill="black"/>
                                <rect x="7" y="2" width="29" height="4" transform="rotate(90 7 2)" fill="black"/>
                                <rect x="25.95" y="0.05" width="32.9" height="25.9" transform="rotate(90 25.95 0.05)" stroke="black" stroke-width="0.1"/>
                            </svg>
                        </button>
                    </div>
                    <div className="filter-icon-container">
                        <button onClick={() => setColumns(4)} className={columns === 4 && "active"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                            <rect x="33.95" y="0.05" width="32.9" height="33.9" transform="rotate(90 33.95 0.05)" fill="white"/>
                            <rect x="31" y="2" width="29" height="4" transform="rotate(90 31 2)" fill="black"/>
                            <rect x="23" y="2" width="29" height="4" transform="rotate(90 23 2)" fill="black"/>
                            <rect x="15" y="2" width="29" height="4" transform="rotate(90 15 2)" fill="black"/>
                            <rect x="7" y="2" width="29" height="4" transform="rotate(90 7 2)" fill="black"/>
                            <rect x="33.95" y="0.05" width="32.9" height="33.9" transform="rotate(90 33.95 0.05)" stroke="black" stroke-width="0.1"/>
                        </svg>    
                        </button>                    
                    </div>
                </div>
                <div className="filter-item">
                    <div className="column-2">
                        <span>Items per page</span>
                        <select>
                            <option>50</option>
                            <option>100</option>
                            <option>200</option>
                        </select>
                    </div>
                    <div className="column-2">
                        <span>Sort by</span>
                        <select>
                            <option>Featured</option>
                            <option>Price, low to high</option>
                            <option>Alphabetically, A-Z</option>
                            <option>Date, old to new</option>
                            <option>Best Selling</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid-container'>
            {
            products.map((product, index) => (
                <div className={`grid-item`}>
                    <CardTwo
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                </div>
            ))
            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Grid