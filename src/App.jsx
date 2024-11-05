import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className="bg-green-600 p-2 px-10
  font-bold text-xl w-full gap-4
  flex justify-between items-center
  text-white"
    >
      <div className="flex items-center gap-2">
        <FaReact size={60} />A React Icon
      </div>
      <div className="md:gap-4 hidden md:flex lg:gap-9 items-center">
        <div className="hover:text-black transition ease-in  ">Home</div>
        <div className="hover:text-black transition ease-in  ">Home</div>
        <div className="hover:text-black transition ease-in  ">Home</div>
        <div className="hover:text-black transition ease-in ">About</div>
        <div className="hover:text-black transition ease-in ">Contact</div>
      </div>
      <div className="relative md:hidden">
        <RxHamburgerMenu onClick={() => setMenu((prev) => !prev)} size={40} />
        {menu && (
          <div className="absolute  bg-green-400  w-36 text-center p-3 rounded-sm right-5 ">
            <div className="hover:text-black hover:bg-green-600 p-3 rounded-lg transition ease-in  ">
              Home
            </div>
            <div className="hover:text-black hover:bg-green-600 p-3 rounded-lg transition ease-in  ">
              Home
            </div>
            <div className="hover:text-black hover:bg-green-600 p-3  rounded-lg transition ease-in  ">
              Home
            </div>
            <div className="hover:text-black hover:bg-green-600 p-3  rounded-lg transition ease-in  ">
              Home
            </div>
            <div className="hover:text-black hover:bg-green-600 p-3  rounded-lg transition ease-in  ">
              Home
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
