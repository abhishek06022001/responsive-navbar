import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
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
          <div className="absolute  bg-green-400 z-30  w-36 text-center p-3 rounded-sm right-5 ">
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
    <div className="p-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus commodi beatae ipsa eum, nostrum dicta doloremque minima perferendis voluptatum, voluptates nulla eveniet eius aliquid odio pariatur laborum harum quos?
      Possimus quas quia officia praesentium dolor. Vel ad praesentium placeat explicabo non sunt ab maxime porro voluptates quibusdam asperiores quae amet harum iusto sequi, iure rem assumenda molestiae commodi vitae.
      Nihil asperiores obcaecati nulla doloribus soluta est dicta sint, magni exercitationem quibusdam! Incidunt quam modi commodi asperiores et. Quas aut ex ipsa minima libero sint neque in sit, ab rerum!
      Necessitatibus reprehenderit, maiores corrupti assumenda enim dolore nesciunt quas rerum similique amet architecto blanditiis voluptates iure earum tempore, alias officia omnis est ad? Repudiandae voluptates mollitia labore, aut praesentium temporibus?
      Quod dicta quasi itaque dolores minima deleniti, a adipisci similique modi provident repellat exercitationem velit distinctio cumque! Sed vel qui at aliquid ex quibusdam tempore minus quas, nesciunt architecto ullam.
      Modi velit ipsa quae delectus laudantium atque soluta, culpa dolores laboriosam, ipsam iste tenetur molestias, impedit qui necessitatibus molestiae amet vero recusandae temporibus totam? Porro beatae maiores ea unde voluptas.
      Quam quaerat veniam asperiores? Atque, non? Quod impedit distinctio sed, nemo eligendi illo quasi optio. Minus nisi praesentium labore corrupti magnam quod mollitia rerum, placeat magni at illo dolorum sunt!
      Incidunt tempora quo, non tempore vel optio quod commodi, totam nulla sapiente accusantium, delectus architecto quibusdam! Incidunt atque consequatur nihil quo iste quis sequi non exercitationem, eum similique nulla architecto!
      Dignissimos exercitationem aut ex delectus cumque, amet iste pariatur, blanditiis deleniti nulla eum? Consequuntur nisi distinctio, animi tempore reprehenderit eum autem unde numquam beatae recusandae, nobis voluptatibus rerum dolor atque.
      Eaque iusto dignissimos, reiciendis suscipit error ex nemo quidem? Magni numquam eum, impedit architecto quisquam doloribus ut tempore, ducimus minus modi doloremque quis, porro fugit? Molestias ducimus et doloremque quam.
    </div>
    </>
  
  );
}

export default App;
