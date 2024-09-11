import React from "react";
import { TableComponent, TableWrapper, TBody, TBR, TD, TH, THead, THR } from "./MetersTable.styles";
import { observer } from "mobx-react";
import { useStore } from "../../shared/store/Store";
import { MeterRow } from "./MeterRow";

interface MetersTableProps {
  page: number;
  onDeleteCallback: (id: string) => void;
}

export const MetersTable = observer((props: MetersTableProps) => {
  const {
    metersStore
  } = useStore();
  return (
    <TableWrapper>
      <TableComponent>
        <THead>
          <THR>
            <TH $textAlign="center">№</TH>
            <TH>Тип</TH>
            <TH>Дата установки</TH>
            <TH>Автоматический</TH>
            <TH>Текущие показания</TH>
            <TH>Адрес</TH>
            <TH>Примечание</TH>
            <TH></TH>
          </THR>
        </THead>
        <TBody>
          {metersStore.meters.map((meter, index) => (
            <MeterRow
              key={meter.id}
              meter={meter}
              index={index}
              page={props.page}
              onDeleteCallback={props.onDeleteCallback}
            />
          ))}
        </TBody>
      </TableComponent>
    </TableWrapper>
  );
});
