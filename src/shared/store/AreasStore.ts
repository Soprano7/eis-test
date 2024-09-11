import { flow, types } from "mobx-state-tree";

export const House = types.model({
  id: types.identifier,
  address: types.string,
  fias_addrobjs: types.array(types.string),
});

export const Area = types.model({
  id: types.identifier,
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
  house: House,
});

export const AreasStore = types
  .model("MetersStore", {
    areas: types.map(Area),
  })
  .actions((self) => {
    const fetchAreas = flow(function* (ids: Set<string>) {
      try {
        const fiterKeys = Array.from(ids).filter(id => !self.areas.has(id))
        if (!fiterKeys.length) {
          return true
        }
        const res = yield Promise.allSettled(
          fiterKeys.map((id) =>
            fetch(`http://showroom.eis24.me/api/v4/test/areas?id=${id}`),
          ),
        );
        const resArray: any[] = [];
        res.forEach((res) => {
          if (res.status === "fulfilled") {
            resArray.push(res.value);
          }
        });
        const allValues = yield Promise.all(resArray.map((r) => r.json()));
        allValues.forEach((element) => {
          const el = element.results[0];
          if (el) {
            self.areas.set(el.id, el);
          }
        });
        return true;
      } catch (e) {
      } finally {
        return true;
      }
    });
    return { fetchAreas };
  });
