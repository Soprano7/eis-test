import { flow, types } from "mobx-state-tree";
import { AreaMeters } from "../enum/AreaMeters";

const Area = types.model({
  id: types.identifier,
});

export const Meter = types.model({
  id: types.identifier,
  description: types.string,
  is_automatic: types.maybeNull(types.boolean),
  serial_number: types.string,
  installation_date: types.string,
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  area: Area,
  communication: types.string,
  initial_values: types.array(types.number),
  _type: types.array(
    types.enumeration<AreaMeters>("_type", Object.values(AreaMeters)),
  ),
});

export const MetersStore = types
  .model("MetersStore", {
    meters: types.array(Meter),
    count: types.number
  })
  .actions((self) => {
    const fetchMeters = flow(function* (offset: number) {
      try {
        const res = yield fetch(`http://showroom.eis24.me/api/v4/test/meters?limit=20&offset=${offset}`);
        if (res.status === 200) {
          const meters = (yield res.json());
          self.meters = meters.results;
          self.count = meters.count;
          return true;
        }
        throw new Error("Smth gone wrong");
      } catch (e) {
      } finally {
        return true;
      }
    });
    const deleteMeter = flow(function* (id: string) {
      try {
        yield fetch(`http://showroom.eis24.me/api/v4/test/meters/${id}`, {
          method: "DELETE",
        });
        throw new Error("Smth gone wrong");
      } catch (e) {
      } finally {
        return true;
      }
    });
    return { fetchMeters, deleteMeter };
  });
