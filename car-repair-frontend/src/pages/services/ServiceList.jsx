import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await api.get('/services');
    setServices(res.data);
  };

  const deleteService = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      await api.delete(`/services/${id}`);
      fetchServices();
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <Link to="/services/add">Add New Service</Link>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Service Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.ServiceCode}>
              <td>{service.ServiceCode}</td>
              <td>{service.ServiceName}</td>
              <td>${service.ServicePrice}</td>
              <td>
                <Link to={`/services/edit/${service.ServiceCode}`}>Edit</Link> |{' '}
                <button onClick={() => deleteService(service.ServiceCode)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
