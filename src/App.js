import { Box, Tab, Tabs, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import CardApproval from './components/CardApproval';
import CardAmounts from './components/CardAmounts';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [requests, setRequests] = useState([]);
  const [approved, setApproved] = useState([]);

  const handleAddRequest = (request) => {
    setRequests([...requests, request]);
  };

  const handleApprove = (index) => {
    const requestToApprove = requests[index];
    setApproved([...approved, requestToApprove]);
    setRequests(requests.filter((_, i) => i !== index));
  };

  const handleReject = (index) => {
    setRequests(requests.filter((_, i) => i !== index));
  };

  const handleSubmitAmount = (amount) => {
    // Aquí manejar la lógica para guardar el monto asociado a la tarjeta aprobada
  };

  return (
    <div className="App">
      <h1>Banco Credit Suisse</h1>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Solicitud de tarjetas" />
          <Tab label="Tarjetas solicitadas" />
          <Tab label="Tarjetas aprobadas" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ContactForm onSubmit={handleAddRequest} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardApproval 
          requests={requests} 
          onApprove={handleApprove} 
          onReject={handleReject} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CardAmounts 
          approved={approved} 
          onSubmitAmount={handleSubmitAmount} 
        />
      </CustomTabPanel>
    </Box>
    </div>
  );
}

export default App;
