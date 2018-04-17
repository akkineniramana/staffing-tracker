import React from 'react';

const OppEditModal = (props) => {
    const {editOpp} = props;
    console.log(editOpp);
    return <div className="modalContent">
        <div className="modalHeader">
          <span className="close" onClick={props.closeModal}>
            &times;
          </span>
          <h3>Edit Opportunity</h3>
        </div>
        <div className="modalBody">
          <form>
            <label>
              Opportunity Name: <input type="text" placeholder={editOpp.opp.name} value={props.opp} onChange={(props.handleChange)} />
            </label>
            Domain : <select value={editOpp.domain}>
              <option value="dev">Dev</option>
              <option value="support">Support</option>
            </select>
          </form>
        </div>
        <div className="modalFooter">
          <button onClick={() => this.saveOpp()} className="Button">
            Save
          </button>
        </div>
      </div>;
    
}

export default OppEditModal;