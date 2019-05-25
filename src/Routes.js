import React from 'react';
import {Route, Switch} from "react-router-dom";
import Photos from "./containers/Photos/Photos";
import NewPhoto from "./containers/NewPhoto/NewPhoto";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";


const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Photos} />
            <Route path="/photos" exact component={Photos} />
            <Route path="/users/:id" exact component={Photos} />
            <Route path="/photos/new" exact component={NewPhoto} />
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
    );
};

export default Routes;
