import React, { FC, useCallback } from "react";
import { TBR, TD } from "../MetersTable.styles";
import { MetersStore } from "../../../shared/store/MetersStore";
import { Instance } from "mobx-state-tree";
import dayjs from "dayjs";
import { METERS_PAGE_COUNT } from "../../../shared/consts/pages";
import { MeterType } from "../../../shared/ui/MeterType";
import { observer } from "mobx-react";
import { useStore } from "../../../shared/store/Store";
import { DeleteButton } from "../../../shared/ui/Button";

interface MeterRowProps {
  page: number;
  index: number;
  meter: Instance<typeof MetersStore.properties.meters>[number];
  onDeleteCallback: (id: string) => void;
}

export const MeterRow: FC<MeterRowProps> = observer(
  ({ meter, page, index, onDeleteCallback }) => {
    const { areasStore } = useStore();
    const onDelete = useCallback(() => {
      onDeleteCallback(meter.id);
    }, [meter.id]);
    return (
      <TBR key={meter.id}>
        <TD $textAlign="center">{page * METERS_PAGE_COUNT + index + 1}</TD>
        <TD>
          <MeterType type={meter._type[0]} />
        </TD>
        <TD>{dayjs(meter.installation_date).format("DD.MM.YYYY")}</TD>
        <TD>{meter.is_automatic === false ? "Нет" : "Да"}</TD>
        <TD>{meter.initial_values[0]}</TD>
        <TD>{areasStore.areas.get(meter.area.id)?.house.address || "—"}</TD>
        <TD>{meter.description || "—"}</TD>
        <TD>
          <DeleteButton onClick={onDelete} />
        </TD>
      </TBR>
    );
  },
);
