import React from "react"

const blogForm = (props) => (
  <form onSubmit={(e) => {props.submit(e)}}>
    <label>
      Title:
      <input type="text" name="title" onChange={(e) => props.change(e)}/>
    </label>
    <label>
      Content:
      <input type="text" name="content" onChange={(e) => props.change(e)} />
    </label>
    <label>
      Author:
      <input type="text" name="author" onChange={(e) => props.change(e)}/>
    </label>
      <input type="submit" value="Submit" />
  </form>
)

export default blogForm
