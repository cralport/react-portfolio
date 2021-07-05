import React, {useEffect} from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props

    useEffect(() => {
        document.title = 'Cory Alport - ' + currentCategory
    },[currentCategory]);

    return (
        <nav>
            <ul className='flex-row'>
                {categories.map((category) => (
                    <li className={`mx-2 ${currentCategory === category && 'navActive'}`} key={category}>
                        <span
                            onClick={() => {
                                setCurrentCategory(category)
                            }}
                        >
                            {category}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;