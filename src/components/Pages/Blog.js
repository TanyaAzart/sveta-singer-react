import React from 'react';
import PostItem from '../PostItem';


class Blog extends React.Component {

    render =()=> {
        
        return(
            <div>                
                <div className="container">
                <h1>Статьи</h1>
                <h2>... и прочие размышления вслух</h2>              
                <PostItem />    
                <PostItem />
                <PostItem />           
                </div>                             
            </div>
            )   
        }   
    
}



export default Blog;