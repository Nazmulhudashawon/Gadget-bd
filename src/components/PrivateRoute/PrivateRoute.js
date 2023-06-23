
import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // const {children, ...rest}=props;
    const { user, loading } = useAuth();
    if (loading) return 'loading';
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || "/home";
    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect to={{
                    pathname: "/login",
                    state: { from: location }

                }}>
                   
                </Redirect>
                
            }>

        </Route>
        
    );
};

export default PrivateRoute;