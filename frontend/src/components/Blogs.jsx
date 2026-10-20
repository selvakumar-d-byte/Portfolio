import { useEffect, useState } from "react";
import axios from 'axios'
import auth from "../config/firebase";

function Blogs() {
    const [admin, setAdmin] = useState(false)
    const [blogs, setBlogs] = useState([])
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        axios.get('https://portfolio-selvakumar.onrender.com/api/blogs').then((res) => {
            setBlogs(res.data)
        }).catch(() => {
            console.log('error to fetch blogs data')
        })

        auth.onAuthStateChanged(function (user) {
            if (user) {
                if (user.uid === 'PRAWXIEmCmMsLKKDDX8rdmYEh2E3') {
                    setAdmin(true)
                }
                else {
                    setAdmin(false)
                }
            }
        })
    }, [])

    async function handleNewBlogs(e) {
        e.preventDefault()
        const today = new Date()
        const date = today.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

        const likes = 0
        await axios.post('https://portfolio-selvakumar.onrender.com/api/blogs', { newTitle: newTitle, date: date, newContent: newContent, likes: likes }).then((res) => {
            setBlogs([...blogs, res.data])
            console.log(res.data)
        }).catch((error) => {
            console.log("MongoDB save error:", error.response?.data || error.message)
        })

        setNewTitle('')
        setNewContent('')
    }

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`https://portfolio-selvakumar.onrender.com/api/blogs/like/${blog_id}`);
            // After successfully updating the likes count in the backend, fetch the updated list of blogs
            if (response.status === 200) {
                axios.get("https://portfolio-selvakumar.onrender.com/api/blogs").then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                }).catch(() => {
                    console.log("Error fetching data")
                })
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    async function handleDelete(blog_id) {
        const confirmDelete = window.confirm('Are you sure to delete')

        if (!confirmDelete) {
            return
        }

        try {
            await axios.delete(`https://portfolio-selvakumar.onrender.com/api/blogs/${blog_id}`)

            setBlogs((prevBlogs) =>
                prevBlogs.filter((blog) => blog._id !== blog_id)
            );
        }
        catch (error) {
            console.error(error.message)
        }
    }

    return (
        <section id="blogs" className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10">
                    <p className="text-violet-600 font-semibold">MY BLOGS</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Latest Articles</h2>
                    <p className="text-gray-600 mt-3">My thoughts, learnings and experiences in web development.</p>
                </div>

                {admin && (
                    <form className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Create a Blog</h3>

                        <label className="block text-sm font-medium text-gray-700 mb-2">Blog Topic</label>
                        <input value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} type="text" placeholder="Enter blog topic" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" />

                        <label className="block text-sm font-medium text-gray-700 mt-5 mb-2">Blog Content</label>
                        <textarea value={newContent} onChange={(e) => { setNewContent(e.target.value) }} placeholder="Write your blog content..." className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500 resize-y" />

                        <button onClick={handleNewBlogs} type="submit" className="mt-5 w-full py-3 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors">Publish Blog</button>
                    </form>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <article key={index} className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-violet-300 hover:-translate-y-1 transition-all duration-300">
                            <p className="text-sm text-violet-600 font-medium"> {blog.date}</p>
                            <h3 className="text-xl font-semibold text-gray-900 mt-3">{blog.newTitle}</h3>
                            <p className="text-gray-600 leading-7 mt-3 whitespace-pre-line">{blog.newContent}</p>
                            <div className="flex justify-between pt-4">
                                <div>
                                    <p className=" rounded-lg bg-violet-600 text-white px-2 py-1 cursor-pointer inline-block" onClick={() => handleLike(blog._id)}>Like</p>
                                    <span className="ml-2">{blog.likes} Likes</span>
                                </div>
                                {admin && (<button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(blog._id)}>Delete</button>)}
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Blogs;
