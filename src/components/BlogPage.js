import React, { useEffect, useState } from 'react'
import { BLOG_PAGE_URL } from '../utils/config'
import { Link, useParams } from 'react-router-dom';
import RelatedBlogs from './RelatedBlogs';

const BlogPage = () => {

    const { blogId } = useParams()
    const [blogPage, setBlogPage] = useState([]);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    // const { author, category, content, date, tags, img, title } = blogPage;


    useEffect(() => {
        getBlogPage();
        getRelatedBlogs();
    }, []);



    async function getBlogPage() {
        const data = await fetch(`${BLOG_PAGE_URL}get-blog?blogId=${blogId}`);
        const json = await data.json();
        console.log(json.blog)
        setBlogPage(json.blog)
    }

    async function getRelatedBlogs() {
        const data = await fetch(`${BLOG_PAGE_URL}get-blog?blogId=${blogId}`);
        const json = await data.json();
        console.log(json.relatedBlogs)
        setRelatedBlogs(json.relatedBlogs);
    }


    return (
        <div className=' mt-5 pl-20 pr-20'>
            <div className='flex gap-10 p-5  h-auto bg-amber-50 w-auto rounded-lg'>
                <img className='rounded-lg  pb-2 w-[400px] ' alt='thumbnail_img' src={blogPage.img} />
                <div>
                    <h1 className='pb-2 font-bold text-2xl'>{blogPage.title}</h1>
                    <p className=' pb-2 text-xl '>{blogPage.content}</p>
                    <p className='text-sm text-red-300 italic'>Author: {blogPage.author}</p>
                    <p className='text-sm text-red-300 italic'>Category: {blogPage.category}</p>
                    <p className='text-sm text-red-300 italic'>Date: {blogPage.date}</p>
                </div>
            </div>
            <div>
            <h1 className='font-bold text-xl p-5'>Related Blogs </h1>
            </div>
            <div className=' flex flex-wrap gap-5 justify-center'>
                {
                    relatedBlogs.map((relatedBlog, blogPage) => <Link to={"/blog/" + relatedBlog.id} key={relatedBlog.id}><RelatedBlogs  relatedBlog={relatedBlog} /></Link> )
                }
            </div>
        </div>
    )
}

export default BlogPage