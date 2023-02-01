import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import getPosts from "../actions/postsActions";
import Post from "../components/Post";

const Posts = ({dispatch, posts, loading, errors}) => {
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    //La función showPosts que nos mostrará la lista, el mensaje de carga o el error según los estados de la aplicación.

    const showPosts = () => {
        if (loading) return <p>loading posts...</p>
        if (errors) return <p> There has been an error.</p>

        return posts.map((post) => <Post key={post.id} post={post} summary={true} /> );
    }

  return (
    <div className='container'>
      <h1 className='mb-4'> Posts </h1>
      <hr/>
      {showPosts()}
    </div>
  )
}

// Esta función usará el estado que queramos de la store y lo pasará a las propiedades del componente.
const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    errors: state.posts.errors,
    loading: state.posts.loading,
});


export default connect(mapStateToProps)(Posts);
