import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    return (
        <main>
            {getUiPosts(posts)}
        </main>
    )
}

function getUiPosts(posts) {
    return posts.map(post => getUiArticle(post))
}

function getUiArticle(post) {
    return (<Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>);
}

export default ArticleList;