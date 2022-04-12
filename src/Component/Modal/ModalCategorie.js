import React from "react";

function ModalCategorie({
  setopenCategory,
  onChangeCategory,
  onClickCategory,
}) {
  function onClickSaveCat(e) {
    setopenCategory(false);
  }

  return (
    <>
      <div class="CategoryBackground">
        <div className="CategoryContainer">
          <div className="CreeCategory">
            <h1>Ajouter un Categorie</h1>
          </div>
          <label className="TitreCategory">Categorie</label>
          <input
            type="text"
            class="inputCategory"
            onChange={onChangeCategory}
          />
          <button
            className="btn-CreerCategory"
            onClick={() => {
              onClickSaveCat();
              onClickCategory();
            }}
          >
            Creer
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalCategorie;
