import React from 'react';
import imagenFondo from '../assets/images/404.jpg';
import ContentWrapper from './ContentWrapper';
import { Link, Route, Switch } from 'react-router-dom';


function NotFound() {
    return (
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 30 + 'rem' }} src={imagenFondo} alt=" Star Wars - Mandalorian " />

            <Link className="btn btn-danger" to="/">
                <span> Volver al Dashboard </span>
            </Link>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
            </Switch>
        </div>
)
}
export default NotFound;


























