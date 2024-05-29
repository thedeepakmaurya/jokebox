import React from 'react'

const Blog = ({ blog }) => {

    const { author, category, content, date, tags, title } = blog;

    const getPreviewContent = (text) => {
        const words = text.split(' ');
        if (words.length > 30) {
            return words.slice(0, 30).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className='flex flex-col mt-5 pl-20 pr-20'>
            <div className='p-5  shadow-md h-auto bg-yellow-50 w-auto shadow-slate-400 rounded-lg'>
                <h1 className='pb-2 font-bold text-2xl'>{title}</h1>
                <p className=' pb-2 text-xl '>{getPreviewContent(content)}</p>
                <p className='text-sm text-red-300 italic'>Author: {author}</p>
                <p className='text-sm text-red-300 italic'>Category: {category}</p>
                <p className='text-sm text-red-300 italic'>Date: {date}</p>
                <p className='text-sm text-red-300 italic'>Tags: {tags.join(', ')}</p>
            </div>
        </div>
    )
}

export default Blog