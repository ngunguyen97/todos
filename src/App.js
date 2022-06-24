import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { setupServer } from './fakeApis';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './redux/todo/todo.slice';

setupServer();

const { Title } = Typography;
// 41: 56
function App() {
  const dispatch = useDispatch();
  const fetchTodosRef = useRef(() => {});
  fetchTodosRef.current = () => {
    dispatch(fetchTodos());
  };
  useEffect(() => {
    console.log('re-render');
    fetchTodosRef.current();
  }, [fetchTodosRef]);

  console.log('render');
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO LIST</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
