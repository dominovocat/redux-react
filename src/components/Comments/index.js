import React from 'react'
import { connect } from 'react-redux'
import { createCommentAction } from '../../store/actions/actionCreators'

export const Comments = props => {
  return (
    <div style={{ border: '1px solid black' }}>
      <input value="text"
        onClick={() => {
          const action = createCommentAction({ text: "comment", isDone: true })
          props.dispatch(action);}}>Add comment</input>
      <ul>
        {props.comments.list.map((comment) => (<li key={comment.id}>{ comment.text }</li>))}
      </ul>
    </div>
  )
}

const mapStateToProps = store => ({ comments: store.comments })

export default connect(mapStateToProps)(Comments);