import React from 'react'
import './article.css';
import { Link } from 'react-router-dom';


export const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='dweb__blog-container_article'>

            <div className='dweb__blog-container_article-image'>
                <img src={imgUrl} alt="article image" />

            </div>
            <div className='dweb__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p  >Read Full Article</p>
            </div>

        </div>
    )
}
