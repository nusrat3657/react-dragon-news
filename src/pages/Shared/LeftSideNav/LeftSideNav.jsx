import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="p-2 text-xl font-semibold ">All Category</h2>
            {
                categories.map(category => <Link
                    to={`/category/${category.id}`}
                    className="block  text-start text-xl hover:bg-slate-200 py-3 px-10 rounded-md"
                    key={category.id}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;