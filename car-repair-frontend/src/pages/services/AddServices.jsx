import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const [service, setService] = useState({ ServiceName: '', ServicePrice: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/services', service);
    navigate('/services');
  };

  return (
    <div>
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <input name="ServiceName" placeholder="Service Name" onChange={handleChange} required />
        <input name="ServicePrice" placeholder="Service Price" type="number" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddService;
