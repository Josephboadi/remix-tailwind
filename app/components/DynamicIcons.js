

// You can create a custom component but you will need to import them all.

// Here an example with fa icons:

import React from "react";
// import "./styles.css";
import * as Icons from "react-icons/fa";
import * as IconsMd from "react-icons/md";
import * as IconsBs from "react-icons/bs";
import * as IconsRi from "react-icons/ri";
import * as IconsCi from "react-icons/ci";





/* Your icon name from database data can now be passed as prop */
const DynamicIcons = ({ name, style }) => {
  const type = name.slice(0,2)

  if(type === 'Fa') {
    const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent className={style} />;
  }else if (type === 'Md'){
    const IconComponent = IconsMd[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent className={style}/>;
  }
  else if (type === 'Bs'){
    const IconComponent = IconsBs[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent className={style}/>;
  }else if (type === 'Ri'){
    const IconComponent = IconsRi[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent className={style}/>;
  }else if (type === 'Ci'){
    const IconComponent = IconsCi[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent className={style}/>;
  }
  else {
  //   const IconComponent = Icons[name];

  // if (!IconComponent) { // Return a default one
  //   return <Icons.FaBeer />;
  // }

  return;
  }
  
};

export default DynamicIcons

// export default function App() {
//   return (
//     <div className="App">
//       <DynamicFaIcon name="FaAngellist" type="fa"/>
//       <DynamicFaIcon />
//     </div>
//   );
// }