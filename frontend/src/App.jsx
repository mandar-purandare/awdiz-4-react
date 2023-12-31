import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import State from './components/State';
import Effect1 from './components/13-09/Effect1';
import Effect2 from './components/13-09/Effect2';
import Effect3 from './components/15-09/Effect3';
import Effect4 from './components/15-09/Effect4';
import Params from './components/15-09/Params';
import SingleProduct from './components/15-09/SingleProduct';
import MessagingCounter from './components/16-09/MessagingCounter';
import MappingProps from './components/16-09/MappingProps';
import StyledComponents from './components/16-09/StyledComponents';
import Ternary from './components/16-09/Ternary';
import { useContext, useState } from 'react';
import DynamicStyles from './components/20-09/DynamicStyles';
import ChildrenProp from './components/22-09/ChildrenProp';
import Register2 from './components/22-09/Register2';
import { ClassComponent } from './components/29-09/ClassComponent';
import PageNotFound from './components/29-09/PageNotFound';
import Products from './components/30-09/Products';
import Product from './components/01-10/Product';
import Login2 from './components/30-09/Login2';
import AddProduct from './components/04-10/AddProduct';
import UseMemo from './components/06-10/UseMemo';
import UseCallback from './components/07-10/UseCallback';
import UseReducer from './components/08-10/UseReducer';
import TestReducer from './components/08-10/TestReducer';
import CustomHook from './components/13-10/CustomHook';
import CustomHookLS from './components/13-10/CustomHookLS';
import YourProducts from './components/YourProducts';
import { AuthContext } from './components/Context/AuthContext';
import UpdateProduct from './components/UpdateProduct';
import Cart from './components/Cart';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const {state , Login, Logout} = useContext(AuthContext);
  const router = useNavigate();

  function goTo(route){
    router('/'+ route);
  }
  return (
    <div className="App">
      <nav>
          <div onClick={()=>{goTo('')}}>Home</div>
          <div onClick={()=>{goTo('products')}}>All Products</div>
          {state?.user?.name?
          <>
            <div onClick={()=>{goTo('add-product')}}>Add Products</div>
            <div onClick={()=>{goTo('your-products')}}>My Products</div>
            <div onClick={()=>{goTo('cart')}}>Cart</div>
            
          </> 
          :<></>}
          {state?.user?.name?
          <></>:<>
                  <div onClick={()=>{goTo('register2')}}>Register</div>
                  <div onClick={()=>{goTo('login2')}}>Login</div>
          </>}
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/State' element={<State />} />
        <Route exact path='/effect1' element={<Effect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleproduct/:id/:name' element={<SingleProduct />} />
        <Route exact path='/messagingcounter' element={<MessagingCounter/>} />
        <Route exact path='/mappingprops' element={<MappingProps greeting={'Hi,'} names={['Swaraj','Amaan','Faez','Siddhi','Pratiksha']} />}/>
        <Route exact path='/styledcomponents' element={<StyledComponents/>} />
        <Route exact path='/ternary' element={<Ternary loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route exact path='/dynamicstyles' element={<DynamicStyles/>}/>
        <Route exact path='/childrenprop' element={<ChildrenProp/>} />
        <Route exact path='/register2' element={<Register2/>}/>
        <Route exact path='/classcomponent' element={<ClassComponent/>}/>
        <Route exact path='*' element={<PageNotFound/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/login2' element={<Login2/>}/>
        <Route exact path='/add-product' element={<AddProduct/>}/>
        <Route exact path='/usememo' element={<UseMemo/>}/>
        <Route exact path='/usecallback' element={<UseCallback/>}/>
        <Route exact path='/usereducer' element={<UseReducer/>}/>
        <Route exact path='/testreducer' element={<TestReducer/>}/>
        <Route exact path='/customhook' element={<CustomHook/>}/>
        <Route exact path='/customhookLS' element={<CustomHookLS/>}/>
        <Route exact path='/your-products' element={<YourProducts/>}/>
        <Route exact path='/update-product/:id' element={<UpdateProduct/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
