import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTodo, filterStatus, filterPriority } from '../../redux/todo/filter.slice';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [radioStatusEl, setRadioStatusEl] = useState('All');
  const [selectPriorties, setSelectPriorties] = useState([]);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    dispatch(searchTodo(e.target.value));
  };

  const handleFilterStatus = (e) => {
    setRadioStatusEl(e.target.value);
    dispatch(filterStatus(e.target.value));
  };

  const handleSelectPriorties = (value) => {
    setSelectPriorties(value);
    dispatch(filterPriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search placeholder="input search text" value={searchInput} onChange={handleSearchInput} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={radioStatusEl} onChange={handleFilterStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          value={selectPriorties}
          onChange={handleSelectPriorties}
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
      </Col>
    </Row>
  );
}
