export const cellContainerSx = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
} as const

export const cellContentSx = {
  ...cellContainerSx,
  py: 1,
} as const
