import React from 'react';
import Logo from '../images/logo.png'

class PostItem extends React.Component {


    render = () => {

        const createdAgo = 'месяц назад'
        return (
            <div>
                <div className="blog-post">
                    <img src={Logo} />
                        <div id="post-title"><h3>Мой новый интересный пост</h3></div>
                        <div id="post-date"> <p>опубликовано: {createdAgo}</p></div>
                </div>
                    <div id="post-text">
                        <p>Это мой новый интересный пост. Читайте и радуйтесь...</p>
                    </div>                     
            </div>                 
                )
    }
}       


export default PostItem;
