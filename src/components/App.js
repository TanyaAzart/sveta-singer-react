import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import MainPage from './Pages/MainPage';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import School from './Pages/School';
import Contacts from './Pages/Contacts';
import '../App.css'

class App extends React.Component {

render () {

    return (
    <Router>
    <div className = "body">
        <Header />
        <Switch>
            <Route exact path = '/' component={MainPage} />
            <Route exact path = '/blog' component={Blog} /> 
            <Route exact path = '/gallery' component={Gallery} /> 
            <Route exact path = '/school' component={School} /> 
            <Route exact path = '/contacts' component={Contacts} />       
        </Switch>
        <Footer />
    </div>    
    </Router>  
    ) 
   }
}

export default App;