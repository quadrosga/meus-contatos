import * as React from "react"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { IAgenda } from "../types/agendaTypes"

type Props = {
  agendas: IAgenda[]
}

export const TabelaAgenda: React.FC<Props> = ({ agendas }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Sobrenome</TableCell>
              <TableCell align="left">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
             agendas.length > 0 ?
             agendas.map((agenda: IAgenda) => (
              <TableRow
              key={agenda.id}
              >
                <TableCell align="left">{agenda.nome}</TableCell>
                <TableCell align="left">{agenda.sobrenome}</TableCell>
                <TableCell align="left">{agenda.telefone}</TableCell>
              </TableRow>
            )):
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Vazio
              </TableCell>
            </TableRow>
          }
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
  )
}
