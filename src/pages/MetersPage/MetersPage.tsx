import React, { useCallback, useEffect, useState } from 'react'
import { Content, MainWrapper, PaginationWrapper, TableEntityWrapper } from './MetersPage.styles'
import { H2 } from '../../shared/ui/Headings'
import { useStore } from '../../shared/store/Store'
import { MetersTable } from '../../entities/MetersTable/MetersTable'
import { observer } from 'mobx-react'
import ReactPaginate from 'react-paginate'
import { METERS_PAGE_COUNT } from '../../shared/consts/pages'
import { Loader } from '../../entities/Loader/Loader'

export const MetersPage = observer(() => {
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
    const {metersStore, areasStore} = useStore();

    const fetchData = useCallback(async (offset = 0) => {
      setIsLoading(true);
      await metersStore.fetchMeters(offset*METERS_PAGE_COUNT)
      await areasStore.fetchAreas(new Set(metersStore.meters.map(meter => meter.area.id)))
      setIsLoading(false)
    }, [metersStore, areasStore])

    useEffect(() => {
      fetchData();
    }, []);

    const onPageChange = useCallback(
      async (selectedItem: { selected: number }) => {
        await fetchData(selectedItem.selected);
        setPage(selectedItem.selected);
      },
      [],
    );

    const onDeleteHandler = useCallback(async (id: string) => {
      await metersStore.deleteMeter(id)
      fetchData(page)
    }, [page])

  return (
    <MainWrapper>
      <Content>
        <H2>Список счётчиков</H2>
        <TableEntityWrapper>
          <MetersTable page={page} onDeleteCallback={onDeleteHandler} />

          <PaginationWrapper>
            {isLoading && <Loader />}
            <ReactPaginate
              pageCount={metersStore.count / METERS_PAGE_COUNT}
              previousLabel={null}
              nextLabel={null}
              onPageChange={onPageChange}
            />
          </PaginationWrapper>
        </TableEntityWrapper>
      </Content>
    </MainWrapper>
  );
})
