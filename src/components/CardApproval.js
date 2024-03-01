import { Card, CardContent, List, ListItem } from "@mui/material";

function CardApproval({ requests, onApprove, onReject }) {

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {requests.map((request, index) => (
        <ListItem
          key={index}
          disableGutters
        >
        <Card sx={{ maxWidth: 720 }}>
            <CardContent>
                <p>Cliente: {request.name}</p>       
                <p>C.I.: {request.ci}</p>       
                <p>Email: {request.email}</p>       
                <p>Telefono: {request.telephone}</p> 
                <button onClick={() => onApprove(index)}>Aprobar</button>
                <button onClick={() => onReject(index)}>Rechazar</button>      
            </CardContent>
        </Card> 
        </ListItem>
        
      ))}
    </List>
        </>
    );
  }

  export default CardApproval;