const NavBar = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex bg-[#0a9396] mix-blend-difference rounded-br-3xl rounded-bl-3xl p-4">
        <li className="p-3 font-semibold border-r-1">
          <span>Information</span>
        </li>
        {/* <li className="p-3 font-semibold border-l-2">
          <span>Captured Photo</span>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
