import { Instance, types } from "mobx-state-tree";
import { MetersStore } from "./MetersStore";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { AreasStore } from "./AreasStore";

const Store = types.model("Store", {
  metersStore: MetersStore,
  areasStore: AreasStore
});

export const mobxStore = Store.create({
  metersStore: { meters: [], count: 0 },
  areasStore: { areas: {} },
});
export type StoreInstance = Instance<typeof Store>;

export function useStore(): StoreInstance {
  return useContext(MobXProviderContext).store;
}