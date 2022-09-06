/* eslint-disable max-len */
import { Box, Modal } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import * as styles from './ActionButtons.module.scss'

interface ButtonInfo {
  title : string
  description : string[]
}

const formUrl = 'http://eepurl.com/h9Zzv5'

const knowMoreButtonInfo : ButtonInfo = {
  title: 'Somos o promotor de uma revolução na arte de rua!',
  description: ['O PianoBike nasceu do desejo de mudar a forma como a arte de rua é feita na América Latina!', 'Somos a ponte entre os artistas, o público, o governo e as empresas.', 'Já fizemos uma mini revolução no Rio de Janeiro em 2019 e 2020 e agora, pós pandemia, estamos entrando de cabeça no mundo online e nossa escala agora é global!', 'Quer fazer parte desta revolução??', 'Clique em "FAÇA PARTE" para saber como.'],
}

export interface ButtonConfig {
  disabled : boolean
  isOpened : boolean
  info? : ButtonInfo
  open? : () => void
  close? : () => void
}

interface OpenedModals {
  knowMore: boolean
  bePart: boolean
}

const ActionButtons = () => {
  const [openedModals, setOpenedModals] = useState<OpenedModals>({ bePart: false, knowMore: false })

  function handleButtonClick(key : keyof OpenedModals, open : boolean) {
    return () => {
      setOpenedModals({
        ...openedModals,
        [key]: open,
      })
    }
  }

  function renderButton(label : string, config : ButtonConfig) {
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
      {label}
    </Button>
    {config.info
     && <Modal
        open={config.isOpened}
        onClose={config.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <h3 id={styles.modalTitle}>
            {config.info.title}
          </h3>
          <div>
            {config.info.description.map((p) => <p>{p}</p>)}
          </div>
        </Box>
      </Modal>
    }
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
        info: knowMoreButtonInfo,
      })}
      {renderButton('Faça parte!', {
        disabled: false,
        isOpened: openedModals.bePart,
        open: () => window.open(formUrl, '_blank').focus(),
        close: handleButtonClick('bePart', false),
      })}
      {/* {renderButton('PianoBike Stage', {
        disabled: Configuration.Projects.PianoBikeStage.disabled,
      })} */}
    </nav>
  )
}

export default ActionButtons
