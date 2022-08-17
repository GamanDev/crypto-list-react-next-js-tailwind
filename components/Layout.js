import A from "./A";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex m-0 mb-5  bg-gray-200 w-screen h-10 items-center">
        <A text="Home" href={"/"} />
        <A text="Coins" href={"/coins"} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
