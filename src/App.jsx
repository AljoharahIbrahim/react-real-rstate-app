import React, { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

 import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
import { propertiesData } from "./Data/data.js";
import Properties from "./components/Properties";
import Counter from "./Counter";
import AddProperty from "./components/AddProperty";
import UpdateProperty from "./components/UpdateProperty.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./layout/Navbar.jsx";
import Content from "./pages/Content.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Signin from "./pages/Signin.jsx";
import Profile from "./pages/Profile.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import PropertiesList from "./pages/PropertiesList.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import UserOrder from "./components/UserOrder.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/home",
  //     element: <Home/>,
  //   },
  // ]);
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/signin",
            element: <Signin />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/properties",
            element: <PropertiesList />,
          },
          {
            path: "/properties/:id",
            element: <PropertyDetails />,
          },
          {
            path: "/addProperty",
            element: <AddProperty />,
          },
          {
            path: "/updateProperty",
            element: <UpdateProperty />,
          },
          {
            path: "/dashboard/users",
            element: <ProtectedRoute />,
            children: [
              {
                path: "orders",
                element: <UserDashboard />,
              },
            ],
          },
          {
            path: "/dashboard/admins",
            element: <AdminDashboard />,
          },
        ],
      },
    ]);


  return <RouterProvider router={router} />;

  // const [properties, setProperites] = useState(propertiesData);
  // const [updateProperty, setUpdate] = useState(null);

  // const handleAddProperty = (newProperty) => {
  //   setProperites((prevProperites) => {
  //     return [...prevProperites, newProperty];
  //   });
  // };
  // const handleDeleteProperty = (id) => {
  //   // alert(id);
  //   const filterProperities = properties.filter(
  //     (property) => property.id != id
  //   );
  //   setProperites(filterProperities);

  // };
  // const handleUpdateProperty = (property) => {
  //   alert("update" + property);
  //   setUpdate(property);
  // };
  // return (
  //   <div>
  //     <ToastContainer/>
  //     {<AddProperty onHandleAddProperty={handleAddProperty} />}

  //     {updateProperty && <UpdateProperty updateProperty={updateProperty} />}

  //     {/* {<Counter />} */}

  //     <>
  //       <h1>Real Estate Website</h1>
  //       {propertiesData.length > 0 ? (
  //         <Properties
  //           properties={properties}
  //           onHandleDeleteProperty={handleDeleteProperty}
  //           onHandleUpdateProperty={handleUpdateProperty}
  //         />
  //       ) : (
  //         " There are no property "
  //       )}
  //     </>
  //   </div>
  // );
};

export default App;
