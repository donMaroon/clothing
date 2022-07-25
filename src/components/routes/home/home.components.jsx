import {  useState } from 'react';
import Menu from '../../menu.components';
import Button from '../../buttons.components';
import '../../../App.css'
import SHOP_DATA from '../../../allData';
import { Outlet } from 'react-router-dom';


const allCategories = ['All', ...new Set(SHOP_DATA.map(item => item.category))];

console.log(allCategories);

function Home() {
  const [menuItem, setMenuItem] = useState(SHOP_DATA);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if(button === 'All'){
      setMenuItem(SHOP_DATA);
      return;
    }

    const filteredData = SHOP_DATA.filter(item => item.category === button)
    setMenuItem(filteredData)
  }
  return (
    <div>
        <Outlet />
      <div>
        <h1>
          Portfolio
          <span>Filter</span>
        </h1>
      </div>
      <Button button = {buttons} filter={filter}/>
      <Menu menuItem={menuItem}/>
    </div>

  
  )
  

}

export default Home;


//   const [searchField, setSearchfield] = useState('');


//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchfield(searchFieldString)
//   }

//   const filteredFoods = foods.filter((food) => {
//     return food.title.toLocaleLowerCase().includes(searchField);
//   });

//   console.log(filteredFoods)

//   return (
//     <div>
//       <input 
//       type='search' 
//       placeholder='search' 
//       onChange={onSearchChange}
//       />
//       {filteredFoods.map((food) => {
//         return (
//           <h2>{food.title}</h2>
//         )
//       })}

//     </div>
//   )