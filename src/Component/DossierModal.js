import React, { useState } from "react";
import ModalStatut from "./Modal/ModalStatut";
import ModalCategorie from "./Modal/ModalCategorie";
export default function DossierModal({
  setopen,
  onChange,
  onClick,
  Statut,
  Categorie,
  onChangeCategory,
  onClickCategory,
  OnSaveStatut,
  OnSaveCategory,
  OnSaveTitre,
  OnsaveDescription,
  onClickCreeDossier,
}) {
  const [openStatut, setopenStatut] = useState(false);
  const [openCategory, setopenCategory] = useState(false);

  function closeModal() {
    setopen(false);
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="Cree">
          <h1>Creer un Dossier</h1>
        </div>
        <label class="Titre">Titre</label>
        <input type="text" class="inputTitre" onChange={OnSaveTitre} />
        <br />
        <label class="Description">Description</label>
        <input
          type="text"
          class="inputDescription"
          onChange={OnsaveDescription}
        />
        <br />
        <button
          class="btn-Creer"
          onClick={() => {
            closeModal();
            onClickCreeDossier();
          }}
        >
          Creer
        </button>
        <img
          src="../Media/close.png"
          alt=""
          id="closeModal"
          onClick={closeModal}
        />
        <form>
          <div className="formStatut">
            <select
              aria-label="State"
              className="combo-Statut"
              onChange={OnSaveStatut}
            >
              <option value="Statuts" selected>
                Statuts
              </option>
              {Statut.map((st) => {
                return <option value={st.statusName}>{st.statusName}</option>;
              })}
            </select>
            <img
              src="../Media/add.png"
              alt=""
              className="ajouteStatut"
              onClick={() => setopenStatut(true)}
            />

            {openStatut ? (
              <ModalStatut
                setopenStatut={setopenStatut}
                onChange={onChange}
                onClick={onClick}
              />
            ) : null}
            
          </div>
          <div className="formCategory">
            <select
              aria-label="Category"
              className="combo-Category"
              onChange={OnSaveCategory}
            >
              <option value="Category">Categorie</option>
              {Categorie.map((cat) => {
                return (
                  <option value={cat.categoryName}>{cat.categoryName} </option>
                );
              })}
            </select>
            <img
              src="../Media/add.png"
              alt=""
              id="ajouteCategorie"
              onClick={() => setopenCategory(true)}
            />
            {openCategory ? (
              <ModalCategorie
                setopenCategory={setopenCategory}
                onChangeCategory={onChangeCategory}
                onClickCategory={onClickCategory}
              />
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
