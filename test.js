const getTodo = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const response = await axios.get(url);
  return response.data;
}
getTodo(1).then((todo) => {
  console.log(todo);
}
);