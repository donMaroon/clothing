import React from "react";

function Menu({menuItem}) {
    return (
        <div>
            {
                menuItem.map((item) => {
                    return <div key={item.id}>
                        <h2>{item.title}</h2>
                        <h3>{item.category}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;