import React, { ChangeEvent, useState } from "react"
import SearchIcon from '@mui/icons-material/Search'
import { Box, InputBase, Paper } from "@mui/material"
import { useDispatch } from 'react-redux'
import { filtrarTexto } from '../actions/filtrarAction'

export const FiltrarAgenda: React.FC = () => {
      const dispatch = useDispatch()
      const [filtrarState, setFiltrarState] = useState<string>("")

  const filtrarTextoNovo = (txtVal: string) => {
    dispatch(filtrarTexto(txtVal))
  }

  const armazenaTermoProcurado = (e: ChangeEvent<HTMLInputElement>) => {
    setFiltrarState(e.currentTarget.value)
    filtrarTextoNovo(e.currentTarget.value)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <Paper
          sx={{ p: '2px 4px', mb: '10px', display: 'flex', alignItems: 'center' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            value={filtrarState || ""}
            onChange={armazenaTermoProcurado}
          />
            <SearchIcon />
        </Paper>
        </Box>
  )
}
