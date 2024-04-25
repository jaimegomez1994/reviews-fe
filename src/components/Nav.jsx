import Logo from "./Logo";
import Search from "./Search";

export default function Nav(props) {
  return (
    <nav className="fixed w-screen sm:h-[68px] h-[56px] bg-red-300 flex columns-3 px-8 items-center justify-between">
      <Logo />
      <Search />
      <div>Login</div>
    </nav>
  );
}
