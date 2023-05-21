 import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import classes from "./App.module.css";
 import {Route, Routes} from "react-router";


function App() {
    return (
        <div className={classes.wrapperPositionBlocks}>
            <div className={classes.positionBlocks}>
                <Navbar/>
                    <Routes>
                        <Route path='/' element={<Menu/>}/>
                        <Route path='/document' element={<div className={classes.pages}>Document</div>}/>
                        <Route path='/about' element={<div className={classes.pages}>About</div>}/>
                        <Route path='/applications' element={<div className={classes.pages}>Applications</div>}/>
                        <Route path='*' element={<div className={classes.pages}>Not found</div>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
