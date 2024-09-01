import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;







// import React from 'react';
// import Review from './data/Review';
// function App() {
//   return (
//     <main>
//       <section className='container'>
//         <div className='title'>
//           <h2>our reviews</h2>
//           <div className='underline'></div>
//         </div>
//         <Review />
//       </section>
//     </main>
//   );
// }

// export default App;





// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonall

// import React, { useState, useEffect } from 'react';
// import Posts from './components/Posts';
// import Pagination from './components/Pagination';
// import axios from 'axios';
// // import React from 'react';
// import './index.css';

// const App = () => {

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className='container mt-5'>
//     <h1 className='text-primary mb-3'>My Blog</h1>
//     <Posts posts={currentPosts} loading={loading} />
//     <Pagination
//       postsPerPage={postsPerPage}
//       totalPosts={posts.length}
//       paginate={paginate}
//     />
//   </div>
//   );
// };

// export default App;