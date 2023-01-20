import './Modal.css'

const Modal=({children,isOpen,closeModal})=>{
    const handleModal=(e)=> e.stopPropagation();
    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModal}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    );
};

export default Modal;