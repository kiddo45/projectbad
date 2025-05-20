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
      <div className="container mt-5">
        <div className="card">
      <div className="card-header"> Add Service</div>
      
      <form onSubmit={handleSubmit}>
        <div className="card-body">
        <div className="form-group"> <label htmlFor="">Service Name</label>
        <input className='form-control' name="ServiceName" placeholder="Service Name" onChange={handleChange} required />
        </div>
        <label htmlFor="">Service Price</label>
        <input className='form-control' name="ServicePrice" placeholder="Service Price" type="number" onChange={handleChange} required /> <p></p>
       </div>
       <div className="card-footer">
        <button type="submit" className='btn btn-primary w-100'>Add Service</button>
     </div>
      </form>
      </div>
      </div>
    
    
    </div>
  );
};

export default AddService;
