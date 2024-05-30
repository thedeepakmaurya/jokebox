import React from 'react'

const RelatedBlogs = ({ relatedBlog }) => {

    const { title, author, tags, content, category } = relatedBlog;

    return (
            <div className='w-64 flex flex-col p-2 rounded-sm  bg-lime-50'>
                <img className='rounded-lg mb-5' alt="thumbnail_img" src={relatedBlog.img}/>
                <h1 className='font-bold text-xl mb-2 '>{title}</h1>
                <p className='text-md mb-2'>{content}</p>
                <p className='text-sm text-red-300'>Author: {author}</p>
                <p className='text-sm text-red-300'>Category: {category}</p>
                <p className='text-sm text-red-300'>Tags: {tags.join(", ")}</p>                
            </div>
    )
}

export default RelatedBlogs