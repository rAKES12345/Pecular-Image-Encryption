import { useRef } from 'react';

const Modal = ({ titleMsg, bodyMsg1, bodyMsg2 }) => {
    const modalRef = useRef();

    const handleCloseModal = () => {
        modalRef.current.style.display = 'none';
    };

    return (
        <div className="modal show" ref={modalRef} style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between">
                        <h5 className="modal-title">{titleMsg}</h5>
                        <button type="button" className="btn btn-danger close" onClick={handleCloseModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-center">
                        <span className="fs-5 fw-bold text-success px-2">{bodyMsg1}</span>
                        <span className="fs-5 fw-bold text-warning px-2">{bodyMsg2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
