import React, { Component } from 'react'
import { connect } from 'react-redux' //connects components to redux store given by Provider
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts()
    }
  render() {
      const postItems =this.props.posts.map(post => (
          <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
          <h1>Posts</h1>
          {postItems}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.posts.items //state.posts corresponds to what was set in root reducer
})

export default connect(mapStateToProps, { fetchPosts } )(Posts) //where we want to map state to properties