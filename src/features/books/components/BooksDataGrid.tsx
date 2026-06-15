import { useCallback } from 'react'
import { DataGrid, type GridRowParams } from '@mui/x-data-grid'
import { PAGE_SIZE_OPTIONS } from '../model/constants'
import { useBookColumns } from '../hooks/useBookColumns'
import { useBookDialogs } from '../hooks/useBookDialogs'
import { useBooksGridState } from '../hooks/useBooksGridState'
import { STRINGS } from '../../../shared/constants/strings'
import type { BookRow } from '../model/types'
import { ImagePreviewDialog } from './modals/ImagePreviewDialog'
import { RowDetailDialog } from './modals/RowDetailDialog'

interface BooksDataGridProps {
  books: BookRow[]
}

export function BooksDataGrid({ books }: BooksDataGridProps) {
  const {
    sortModel,
    setSortModel,
    filterModel,
    setFilterModel,
    paginationModel,
    setPaginationModel,
    columnVisibilityModel,
    setColumnVisibilityModel,
  } = useBooksGridState()

  const { rowDialog, imageDialog } = useBookDialogs()

  const handleImageClick = useCallback(
    (book: BookRow) => {
      imageDialog.open(book)
    },
    [imageDialog],
  )

  const { columns, getRowHeight } = useBookColumns(handleImageClick)

  const handleRowClick = useCallback(
    (params: GridRowParams<BookRow>) => {
      rowDialog.open(params.row)
    },
    [rowDialog],
  )

  return (
    <>
      <DataGrid
        rows={books}
        columns={columns}
        sortingMode="client"
        filterMode="client"
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        filterModel={filterModel}
        onFilterModelChange={setFilterModel}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={setColumnVisibilityModel}
        pageSizeOptions={[...PAGE_SIZE_OPTIONS]}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
        getRowHeight={(params) => getRowHeight(params.model.description)}
        sx={{
          border: 0,
          '& .MuiDataGrid-row': { cursor: 'pointer' },
          '& .MuiDataGrid-cell': {
            alignItems: 'flex-start',
            py: 0,
          },
        }}
      />

      <RowDetailDialog
        book={rowDialog.data}
        open={rowDialog.isOpen}
        onClose={rowDialog.close}
      />

      <ImagePreviewDialog
        imageUrl={imageDialog.data?.coverUrlLarge ?? null}
        alt={imageDialog.data?.title ?? STRINGS.altCover}
        open={imageDialog.isOpen}
        onClose={imageDialog.close}
      />
    </>
  )
}
