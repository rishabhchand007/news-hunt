import React, { Component } from 'react'
import "./NewsItem.css";
export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, publishedAt, author, source, url } = this.props;
        return (
            <>
                <div className="card">
                    <div className="card__header">
                        <img src={imageUrl?imageUrl:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} alt="card__image" className="card__image" width="600" />
                    </div>
                    <div className="card__body">
                        <span className="tag tag-blue">{source}</span>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="card__footer">
                        <div className="user">
                            <div className="user__info">
                                <h5>{author}</h5>
                                <small>{publishedAt.slice(0, 10)}</small>
                            </div>
                        </div>
                    </div>
                    <a className="button-1" href={url} target="_blank" rel="noreferrer">Read Full</a>
                </div>
            </>
        )
    }
}

export default NewsItem