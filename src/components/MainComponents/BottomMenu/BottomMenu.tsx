import { Box, Modal, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import * as styles from './BottomMenu.module.scss'

export interface BottomMenuProps {

}

export interface ButtonConfig {
  disabled : boolean
  isOpened : boolean
  open? : () => void
  close? : () => void
}

interface OpenedModals {
  knowMore: boolean
  bePart: boolean
}

const BottomMenu = ({

} : BottomMenuProps) => {
  const [openedModals, setOpenedModals] = useState<OpenedModals>({ bePart: false, knowMore: false })

  function handleButtonClick(key : keyof OpenedModals, open : boolean) {
    return () => {
      setOpenedModals({
        ...openedModals,
        [key]: open,
      })
    }
  }

  function renderButton(text : string, config : ButtonConfig) {
    return (
    <>
      <Button
      variant='contained'
      size='medium'
      color='primary'
      className={styles.buttons}
      disabled={config.disabled}
      onClick={config.open}
    >
      {text}
    </Button>
    <Modal
      open={config.isOpened}
      onClose={config.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
      </>
    )
  }

  return (
    <nav className={styles.bottomMenu}>
      {renderButton('Saiba mais', {
        disabled: false,
        isOpened: openedModals.knowMore,
        open: handleButtonClick('knowMore', true),
        close: handleButtonClick('knowMore', false),
      })}
      {renderButton('Faça parte!', {
        disabled: false,
        isOpened: openedModals.bePart,
        open: handleButtonClick('bePart', true),
        close: handleButtonClick('bePart', false),
      })}
      {/* {renderButton('PianoBike Stage', {
        disabled: Configuration.Projects.PianoBikeStage.disabled,
      })} */}
    </nav>
  )
}

export default BottomMenu
