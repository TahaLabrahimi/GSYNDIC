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
    <div className="CategoryBackground">
      <div className="CategoryContainer">
        <div className="CreeCategory">
          <h1>Ajouter un Categorie</h1>
        </div>
        <label className="TitreCategory">Categorie</label>


          <input
            type="text"
            class="inputCategory"
            onChange={onChangeCategory}
            required
          />
          <button
            type="submit"
            className="btn-CreerCategory"
            onClick={() => {
              var x = onClickCategory();
              if (x == 1) {
                onClickSaveCat();
              }
            }}
          >
            Creer
          </button>
          <img
              src="../Media/closeM.png"
              alt=""
              id="closeModalCat"
              onClick={onClickSaveCat}
            />
      </div>
    </div>
  );
}

export default ModalCategorie;
