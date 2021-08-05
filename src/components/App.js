import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import { Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function App() {
	const { currentUser } = useAuth();
	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}>
			{currentUser && (
				<Card>
					<Card.Body>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/update-profile'>update</Link>
							</li>
							<li>
								<Link to='/signup'>signup</Link>
							</li>
							<li>
								<Link to='/login'>login</Link>
							</li>
							<li>
								<Link to='/forgot-password'>forgot password</Link>
							</li>
						</ul>
					</Card.Body>
				</Card>
			)}
			<div className='w-50' styles={{ maxWidth: '400px' }}>
				<Switch>
					<PrivateRoute exact path='/' component={Dashboard} />
					<PrivateRoute path='/update-profile' component={UpdateProfile} />
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
					<Route path='/forgot-password' component={ForgotPassword} />
				</Switch>
			</div>
		</Container>
	);
}

export default App;
