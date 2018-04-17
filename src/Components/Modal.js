import React from 'react';

const Modal = (props) => {
    if (!props.isOpen) {
        return null;
    }
    
      let modalStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "9999" };

      if (props.width && props.height) {
        modalStyle.width = props.width + "px";
        modalStyle.height = props.height + "px";
        (modalStyle.marginLeft = "-" + props.width / 2 + "px"), (modalStyle.marginTop = "-" + props.height / 2 + "px"), (modalStyle.transform = null);
      }

      if (props.style) {
        for (let key in props.style) {
          modalStyle[key] = props.style[key];
        }
      }

      let backdropStyle = { position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", zIndex: "9998", background: "rgba(0, 0, 0, 0.3)" };

      if (props.backdropStyle) {
        for (let key in props.backdropStyle) {
          backdropStyle[key] = props.backdropStyle[key];
        }
      }

     const close = e => {
         console.log("inside close");
       e.preventDefault();
       if (props.onClose) {
         props.onClose();
       }
     };

    return (
        <div>
            <div style={modalStyle}>
                {props.children}
            </div>
            <div style={backdropStyle} onClick={close}></div>
        </div>
    )

   
}
export default  Modal;


