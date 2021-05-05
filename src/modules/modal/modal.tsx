import * as  React from 'react';
import PropTypes from 'prop-types'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  }),
);

export interface LayoutProps  { 
    children: React.ReactNode | any ,
    open: boolean,
    handleClose: any
 }

const ModalComponent = ({children, open, handleClose}: LayoutProps) => {
    const classes = useStyles();
    const onClosePopup = () => {
        handleClose(false)
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClosePopup}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            {children}
            </Fade>
        </Modal>
  )
}

ModalComponent.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

export default ModalComponent;
