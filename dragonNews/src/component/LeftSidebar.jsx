import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category => <Link to={'/'} className="d-block ps-5 pe-1 py-2 mb-2 text-decoration-none w-100 text-dark" style={{backgroundColor: '#E7E7E7'}} key={category.id}> {category.name} </Link>)
                }

            </div>
        </div>
    );
};

export default LeftSidebar;