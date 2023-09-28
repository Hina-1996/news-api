import { useState } from 'react';
import Nav from './Nav';
import New from './New';
import {BrowserRouter, Route, Routes} from "react-router-dom";
export default function App(){
    document.body.style.marginTop="0px";
    const [modes,setmode]=useState('light');
    const toggler=()=>{
        if(modes==='light'){
          setmode('dark');
        //   document.body.style.backgroundColor="black";
          document.body.style.backgroundColor = "rgb(30 56 84)";
        //   showalert("Dark Mode is enabled","success")
        }
        else{
        setmode('light');
        // document.body.style.backgroundColor="white";
        document.body.style.backgroundColor = "white";
        // showalert("Light Mode is enabled","success")
        }
    }
    return(<>
   {/* <Newsitem title="my title" desc="description here"/> */}
    <BrowserRouter>
    <Nav mode={modes} toggler={toggler}/>
    <Routes>
    <Route exact path="/" element={ <div className="d-flex flex-wrap flex-row justify-content-center bd-highlight ">
    <New key="general" mode={modes} category="general" country="in"/> </div>}/>
    <Route exact path="Business" element={<New key="business" mode={modes} category="business" country="in"/>}/>
      <Route exact path="Entertainment" element={<New key="entertainment" mode={modes} category="entertainment" country="in"/>}/>
      <Route exact path="Health" element={<New key="health" mode={modes} category="health" country="in"/>}/>
      <Route exact path="Science" element={<New key="science" mode={modes} category="science" country="in"/>}/>
      <Route exact path="Sports" element={<New key="sports" mode={modes} category="sports" country="in"/>}/>
      <Route exact path="Technology" element={<New key="technology" mode={modes} category="technology" country="in"/>}/>
      </Routes>
      </BrowserRouter>
    </>

    );
}