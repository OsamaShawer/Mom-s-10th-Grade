import { Link } from "react-router-dom";
import Math from "./assets/download.jpg";
function Header() {
  return (
    <>
      <header className="bg-amber-500 pt-[10px]! pb-[10px]!">
        <div className="container flex flex-row-reverse justify-between items-center">
          <img src={Math} className="w-[100px]!" alt="Math" />
          <nav>
            <ul className="flex">
              <li className="pr-[20px]! text-2xl font-bold hover:text-blue-700">
                <Link to="/videos">الفيديوهات</Link>
              </li>
              <li className="pr-[20px]! text-2xl font-bold hover:text-blue-700">
                <Link to="/powerpoints">الملفات</Link>
              </li>
              <li className="pr-[20px]! text-2xl font-bold hover:text-blue-700">
                <Link to="/all">المحتوى كامل</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
