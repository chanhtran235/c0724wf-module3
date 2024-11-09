import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const studentList = [
    {
        id: 1,
        name: "chánh1"
    },
    {
        id: 2,
        name: "chánh2"
    },
    {
        id: 3,
        name: "chánh3"
    }
]
const header =
    // <div>
    //     <h1 className="header" style={{color:'red',fontStyle:'italic'}}>Header</h1>
    // </div>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

const footer =
    <>
        <h1 className={'footer'}> Footer</h1>
    </>
const table =
    <table  className={'table table-dark'}>
        <thead>
        <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {
            studentList.map((e, i) => (
                <tr key={e.id}>
                    <td>{i + 1}</td>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                </tr>
            ))
        }
        </tbody>
    </table>
const app = <div>
    {header}
    {table}
    {footer}
</div>



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
