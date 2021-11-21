import React from "react";
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const Modal = (props) => {
    return (
        <Popup
            open={props.open}
            onClose={props.onClose}
            closeOnDocumentClick={props.closeOnDocumentClick}
            closeOnEscape={props.closeOnEscape}
            {...props}
        >
            {props.children}
        </Popup>
    )
}

Modal.defaultProps = {
    closeOnDocumentClick: false,
    closeOnEscape: false,
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    closeOnDocumentClick: PropTypes.bool,
    closeOnEscape: PropTypes.bool,
    className: PropTypes.string
}

export default Modal;