import { Box, Button, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { IAgenda } from '../types/agendaTypes'

type props = {
  salvarAgenda: (agenda: IAgenda | any) => void
}

export const AddAgenda: React.FC<props> = ({ salvarAgenda }) => {
  const [agenda, setAgenda] = React.useState<IAgenda | {}>()

    const tratarDadosDaAgenda = (e:ChangeEvent<HTMLInputElement>) => {
      setAgenda({
        ...agenda,
        [e.currentTarget.id]: e.currentTarget.value
      })
    }

    const addNovaAgenda = (e: React.FormEvent) => {
      e.preventDefault()
      setAgenda(agenda)
      salvarAgenda(agenda)
    }

    return (
      <Box component="form" sx={{'.MuiTextField-root': { m: 1, width: 400,
      }}}>
      <div className='dados'>
            <TextField name='nome' id='nome' label='Primeiro Nome' onChange={tratarDadosDaAgenda}/>
            <TextField name='sobrenome' id='sobrenome' label='Sobrenome' onChange={tratarDadosDaAgenda} />
            <TextField name='phoneNumber' id='phoneNumber'  label='Phone Number' onChange={tratarDadosDaAgenda}/>
      <Button style={{ width: 400, margin: 5}} size="large" variant="contained" onClick={(e)=> addNovaAgenda(e)} disabled={agenda === undefined ? true : false}>Save</Button>
      </div>
    </Box>
    )
}

