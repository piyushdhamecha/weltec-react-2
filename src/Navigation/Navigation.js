import { useState } from "react";
import Headphones from "./Headphone";
import Mobiles from "./Mobiles";

const Navigation = () => {
  const [item, setItem] = useState()

  const handleMobilesClick = () => {
    setItem('mobile')
  }

  const handleHeadphonesClick= () => {
    setItem('headphones')
  }

  return (
    <div>
      <h3>Items</h3>
      <div onClick={handleMobilesClick}>Mobiles</div>
      <div onClick={handleHeadphonesClick}>Headphones</div>
      {item && item === 'mobile' && <Mobiles />}
      {item && item === 'headphones' && <Headphones />}
    </div>
  );
};

export default Navigation;
