import logo from "../assets/logo.svg";

const Header = () => {
  
  return (
    <div className="flex justify-center w-full py-2 md:py-4" style={{backgroundColor: "rgb(1,173,181)"}}>
      <img className="h-12 lg:h-24 object-center" src={logo} alt="logo"/>
    </div>
  );
};

export default Header;
