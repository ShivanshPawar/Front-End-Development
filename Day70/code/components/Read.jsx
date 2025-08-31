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









// Day 76 & 77



const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    const filtedtodo = todos.filter((todo) => todo.id != id);
    settodos(filtedtodo)
  }

  const rendertodos = todos.map((todo) => {
    return (
      <div className="w-[100%] bg-black px-5 py-5 border rounded border-gray-500 mb-2">
      <li className="text-2xl font-extralight flex justify-between"
        key={todo.id}
        >
        {todo.title}  {" "}
        <span className="text-xl text-red-400 active:scale-95 cursor-pointer" onClick={() => DeleteHandler(todo.id)}>Delete</span>
      </li>
        </div>
    );
  });
  return (
    <div className="w-[45%] h-[100%] border p-10 mx-auto overflow-auto">
      <h1 className="text-5xl font-thin mb-5">Please <span className="text-red-400">complete</span> your tasks</h1>
      <ol>{rendertodos}</ol>
    </div>
  )
}

export default Read


