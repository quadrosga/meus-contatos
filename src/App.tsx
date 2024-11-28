import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "./hooks/useTypedDispatch"
import { AddAgenda } from './components/AddAgenda';
import { Typography } from './styles/TypographyStyled';
import { GridContainer, GridItem } from './styles/GridStyled'
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
      <Typography align="center">
        Agenda
      </Typography>
      <GridContainer>
        <GridItem>
          <AddAgenda salvarAgenda={salvarAgenda} />
        </GridItem>
        <GridItem>
          <FiltrarAgenda />
          <TabelaAgenda agendas={agendaFiltrata} />
        </GridItem>
      </GridContainer>
    </main>
  );
}

export default App;
