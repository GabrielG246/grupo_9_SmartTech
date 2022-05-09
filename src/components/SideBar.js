import React from 'react';
import image from '../assets/images/logo-grande.png';
import ContentWrapper from './ContentWrapper';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';
import ContentTotales from './ContentTotales';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import AllProducts from './AllProducts';
import ProductsList from './ProductsList' ;
import AllUsers from './AllUsers';
import UsersList from './UsersList';
import UsersComplete from './UsersComplete';
import ProductsComplete from './ProductsComplete';



function SideBar(){
    return(
        <React.Fragment>
           
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>
               
                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        
                        <span>  SMART  TECH  </span></Link>
                </li>
                
                <hr className="sidebar-divider"/>

                <div className="sidebar-heading" > P a n e l e s </div>
                
                <li className="nav-item">
                <Link className="nav-link" to="/LastUserInDb">
                        <i className="fas fa-fw fa-user"></i>
                        <span> Último Usuario </span>
                    </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/AllUsers">
                        <i className="fas fa-fw fa-user"></i>
                        <span> Todos los Usuarios </span>
                    </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/UsersList">
                        <i className="fas fa-fw fa-user"></i>
                        <span> Listado de Usuarios </span>
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/UsersComplete">
                        <i className="fas fa-fw fa-user"></i>
                        <span> Usuarios y Listado  </span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-box"></i>
                        <span> Último Producto </span></Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/AllProducts">
                        <i className="fas fa-fw fa-check"></i>
                        <span> Total de Productos </span>
                    </Link>
                </li>
                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ProductsList">
                        <i className="fas fa-fw fa-list"></i>
                        <span> Listado Productos </span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ProductsComplete">
                        <i className="fas fa-fw fa-list"></i>
                        <span> Productos y Listado Completos </span></Link>
                </li>
                
                

                

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
                
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>

                <Route path="/LastUserInDb">
                    <LastUserInDb />
                </Route>

                <Route path="/AllUsers">
                    <AllUsers/>
                </Route>

                <Route path="/UsersList">
                    <UsersList/>
                </Route>

                <Route path="/UsersComplete">
                    <UsersComplete/>
                </Route>

                
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>

                <Route path="/AllProducts">
                    <AllProducts/>
                </Route>

                <Route path="/ProductsList">
                    <ProductsList/>
                </Route>

                <Route path="/ProductsComplete">
                    <ProductsComplete/>
                </Route>

                
                <Route path="/ContentTotales">
                    <ContentTotales />
                </Route>
                
                <Route component={NotFound} />
            </Switch>
            
        </React.Fragment>
)
}
export default SideBar;