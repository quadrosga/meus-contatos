import EstiloGlobal from './styles';
import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "./hooks/useTypedDispatch"
import { AddAgenda } from './components/AddAgenda';
import {  Grid, Typography } from '@mui/material';
import { armazenaAgendaFiltrada } from './utils/utils'
import { addAgenda } from './actions/addAgendaAction';
import { RootState } from './store';
import { TabelaAgenda } from './components/TabelaAgenda';
import { FiltrarAgenda } from './components/FiltroAgenda';
import { IAgenda } from './types/agendaTypes';

const App: React.FC = () => {
  const agendas = useSelector((state: RootState) => state.add.agendas);
  const filtrarDados = useSelector((state: RootState) => state.filtros);
  const agendaFiltrata = armazenaAgendaFiltrada(agendas, filtrarDados);

  const dispatch = useDispatch();
  const salvarAgenda = (agenda: IAgenda) => {
    dispatch(addAgenda(agenda));
  };

  return (
    <main>
      <Typography sx={{ m: '60px' }} variant="h4" align="center" color="textPrimary" display="block" gutterBottom >
        Agenda
      </Typography>
      <Grid container spacing={2} >
        <Grid item lg={6} md={6}>
          <AddAgenda salvarAgenda={salvarAgenda} />
        </Grid>
        <Grid item lg={6} md={6}>
        <div className='content'>
          <FiltrarAgenda/>
          <TabelaAgenda
            agendas={agendaFiltrata}
          />
          </div>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
