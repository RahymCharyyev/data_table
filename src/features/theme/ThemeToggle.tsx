import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useThemeModeContext } from './useThemeModeContext'
import { STRINGS } from '../../shared/constants/strings'

export function ThemeToggle() {
  const { mode, toggleMode } = useThemeModeContext()

  return (
    <Tooltip title={mode === 'light' ? STRINGS.theme.switchToDark : STRINGS.theme.switchToLight}>
      <IconButton
        color="inherit"
        onClick={toggleMode}
        aria-label={STRINGS.theme.toggleAria}
      >
        {mode === 'light' ? (
          <Brightness4Icon aria-hidden="true" />
        ) : (
          <Brightness7Icon aria-hidden="true" />
        )}
      </IconButton>
    </Tooltip>
  )
}
