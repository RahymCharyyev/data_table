import { useCallback, useMemo, useState } from 'react'
import {
  DataGrid,
  type GridColDef,
  type GridRowParams,
} from '@mui/x-data-grid'
import type { BookRow } from '../types/book'
import { useGridPersistence } from '../hooks/useGridPersistence'
import {
  CoverCell,
  DateCell,
  DescriptionCell,
  RatingCell,
} from './cells/BookCells'
import { RowDetailDialog } from './modals/RowDetailDialog'
import { ImagePreviewDialog } from './modals/ImagePreviewDialog'

interface BooksDataGridProps {
  books: BookRow[]
}

function estimateRowHeight(description: string): number {
  const descLength = description.length
  const estimated = 100 + Math.ceil(descLength / 80) * 24
  return Math.min(300, Math.max(100, estimated))
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
  } = useGridPersistence()

  const [selectedBook, setSelectedBook] = useState<BookRow | null>(null)
  const [rowDialogOpen, setRowDialogOpen] = useState(false)
  const [previewBook, setPreviewBook] = useState<BookRow | null>(null)
  const [imageDialogOpen, setImageDialogOpen] = useState(false)

  const handleImageClick = useCallback((book: BookRow) => {
    setPreviewBook(book)
    setImageDialogOpen(true)
  }, [])

  const handleRowClick = useCallback((params: GridRowParams<BookRow>) => {
    setSelectedBook(params.row)
    setRowDialogOpen(true)
  }, [])

  const columns = useMemo<GridColDef<BookRow>[]>(
    () => [
      {
        field: 'coverUrl',
        headerName: 'Cover',
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <CoverCell {...params} onImageClick={handleImageClick} />
        ),
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        minWidth: 280,
        renderCell: (params) => <DescriptionCell {...params} />,
      },
      {
        field: 'publishDate',
        headerName: 'Published',
        type: 'date',
        width: 140,
        renderCell: (params) => <DateCell {...params} />,
        valueGetter: (_value, row) => row.publishDate,
      },
      {
        field: 'rating',
        headerName: 'Rating',
        type: 'number',
        width: 120,
        renderCell: (params) => <RatingCell {...params} />,
      },
    ],
    [handleImageClick],
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
        pageSizeOptions={[5, 10, 25, 50]}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
        getRowHeight={(params) => estimateRowHeight(params.model.description)}
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
        book={selectedBook}
        open={rowDialogOpen}
        onClose={() => setRowDialogOpen(false)}
      />

      <ImagePreviewDialog
        imageUrl={previewBook?.coverUrlLarge ?? null}
        alt={previewBook?.title ?? 'Book cover'}
        open={imageDialogOpen}
        onClose={() => setImageDialogOpen(false)}
      />
    </>
  )
}
