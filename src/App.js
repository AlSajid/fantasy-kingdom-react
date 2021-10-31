import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrder from './components/MyOrder/MyOrder';
import AllOrder from './components/AllOrder/AllOrder';
import NotFound from './components/404/NotFound';


function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<PrivateRoute exact path="/order/:id">
							<Order></Order>
						</PrivateRoute>
						<PrivateRoute exact path="/MyOrder">
							<MyOrder></MyOrder>
						</PrivateRoute>
						<PrivateRoute exact path="/AllOrder">
							<AllOrder></AllOrder>
						</PrivateRoute>
						<Route exact path="/Login">
							<Login></Login>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
