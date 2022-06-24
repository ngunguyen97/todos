import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo } from '../../redux/todo/todo.slice';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { selectTodoListByAllFilters } from '../../redux/todo/todo.selector';
export default function TodoList() {
  const todoRef = useRef(null);
  const [todoName, setTodoName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [todoPriority, setTodoPriority] = useState('Medium');

  const todos = useSelector(selectTodoListByAllFilters);

  const dispatch = useDispatch();
  const handleAddTodoItem = () => {
    if (!todoName.length) {
      setIsEmpty(!todoName.length);
      todoRef.current.focus();
      return;
    }

    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );
    setIsEmpty(!todoName.length);
    setTodoName('');
    setTodoPriority('Medium');
    todoRef.current.focus();
  };
  //2;04;49

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            style={
              isEmpty ? { borderColor: '#ff4d4f', boxShadow: '0 0 0 2px rgb(255 77 79 / 20%)' } : {}
            }
            className="red"
            placeholder="Enter a name"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            ref={todoRef}
          />

          <Select
            defaultValue="Medium"
            value={todoPriority}
            onChange={(value) => setTodoPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodoItem}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
