import React, { useEffect, useState } from 'react';
import api from '../../api';
import { useParams, useNavigate } from 'react-router-dom';

const EditService = () => {
  const { id } = useParams();
  const [service, setService] = useState({ ServiceName: '', ServicePrice: '' });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/services/${id}`).then(res => setService(res.data));
  }, [id]);

  const handleChange = e => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.put(`/services/${id}`, service);
    navigate('/services');
  };

  return (
    <div>
      <h2>Edit Service</h2>
      <form onSubmit={handleSubmit}>
        <input name="ServiceName" value={service.ServiceName} onChange={handleChange} required />
        <input name="ServicePrice" value={service.ServicePrice} type="number" onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditService;
