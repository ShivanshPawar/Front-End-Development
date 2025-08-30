// const Read = (props) => {

//   const users = props.users;
//   // const setuser = props.setuser;

//   console.log(props);

//   const renderuser = users.map((user, index) => {
//     return <li key={index}>{user.name}</li>;
//   })

//   return (
//     <div>
//       <h1>User Data</h1>
//       <ol>{renderuser}</ol>
//     </div>
//   )
// }

// export default Read









// Day76



const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <>
      <h1>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </>
  )
}

export default Read


