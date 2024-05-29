import React, { useEffect, useState } from 'react'
import Blog from './Blog';
import { BLOGS_URL } from '../utils/config';
import { Link } from 'react-router-dom';

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filterData = (searchText, blogs) => {
        return blogs.filter(blog => blog.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    useEffect(() => {
        getBlogs();
    }, [])

    useEffect(() => {
        const data = filterData(searchText, blogs);
        setFilteredBlogs(data);
    }, [searchText, blogs]);

    async function getBlogs() {
        const data = await fetch(BLOGS_URL);
        const json = await data.json();
        setBlogs(json.posts)
        setFilteredBlogs(json.posts)
    }

    return (
        <>
            <div className='sticky top-16 pb-2 bg-white flex justify-center items-center'>
                <input className='border border-zinc-400 p-1 w-60 outline-none mr-2' type='text' placeholder='search keyword..' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className='border border-zinc-400 bg-green-100 p-1' type='submit' onClick={() => { const data = filterData(searchText, blogs); setFilteredBlogs(data) }}>Search</button>
            </div>
            <div>
                {
                    filteredBlogs.map((blog) => <Link to={blog.id} key={blog.id}><Blog blog={blog} /></Link>)
                }
            </div>
        </>
    )
}

export default BlogContainer;