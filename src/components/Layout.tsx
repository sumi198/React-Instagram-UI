// import { Outlet } from "react-router-dom";

// import Header from "./Header";
// import BottomNav from "./BottomNav";

// function Layout() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="mx-auto min-h-screen w-full max-w-md bg-white">
//         <Header />

//         <main className="pb-20">
//           <Outlet />
//         </main>

//         <BottomNav />
//       </div>
//     </div>
//   );
// }

// export default Layout;




import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto min-h-screen w-full max-w-md bg-white">
        <main className="pb-20">
          <Outlet />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default Layout;

