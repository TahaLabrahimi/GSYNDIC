import React from "react";
function ModalStatut({ setopenStatut, onChange, onClick }) {
  function onClickSave(e) {
    setopenStatut(false);
  }
  return (
    <>
      <div className="StatutBackground">
        <div className="StatutContainer">
          <div className="CreeStatut">
            <h1>Ajouter un Statut</h1>
          </div>
          <label className="TitreStatut">Statut</label>
          <input
            type="text"
            className="inputStatut"
            onChange={onChange}
            required
          />
          <button
            className="btn-CreerStatut"
            onClick={() => {
             var x = onClick();
              if(x==1){
                onClickSave();
              }
            }}
          >
            Creer
          </button>
          <img
              src="../Media/closeM.png"
              alt=""
              id="closeModalSt"
              onClick={onClickSave}
            />
        </div>
      </div>
    </>
  );
}

export default ModalStatut;
