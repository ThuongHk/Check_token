import Global from "./global/Global";
import { publicRoute } from "./route/routes";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeafaultLayout from "./components/template/DeafaultLayout";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userNavigate } from "./redux/navigateSlice";


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    dispatch(userNavigate(navigate));
    console.log(navigate);
  }, [])
  return (
   <Global>      
      <Routes>        
          {publicRoute.map((route, index)=>{
            let Page = route.component
            let Layout = DeafaultLayout;
            if(route.layout){
              Layout = route.layout
            }else if(route.layout === null){
              Layout = Fragment
            }
           return (
            <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
           )
          })}       
        </Routes>          
   </Global>
  );
}

export default App;
