import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";

function CardAmounts({ approved, onSubmitAmount }) {
    const [amounts, setAmounts] = useState([]);
  
    const handleAmountChange = (index, event) => {
        const newAmounts = [...amounts];
        newAmounts[index] = event.target.value;
        setAmounts(newAmounts);
    };
  
    return (
      <div>
        <h2>Montos asociados a tarjetas aprobadas</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Cliente</TableCell>
            <TableCell align="left">Celular</TableCell>
            <TableCell align="left">Monto tarjeta aprobado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {approved.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.telephone}</TableCell>
              <TableCell>
                <TextField
                    fullWidth
                    label="Monto"
                    variant="outlined"
                    type="number"
                    value={amounts[index]}
                    onChange={(event) => handleAmountChange(index, event)}
                    required
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
  }

  export default CardAmounts;