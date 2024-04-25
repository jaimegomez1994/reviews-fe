export default function Nav(props) {
  console.log(props);
  return (
    <nav className="fixed w-screen sm:h-[68px] h-[56px] bg-red-300 flex columns-3 px-8 items-center justify-between">
      <div className="">logo</div>
      <div className="w-full">
        <input className="min-w-[250px] "></input>
      </div>
      <div>logi</div>
    </nav>
  );
}
