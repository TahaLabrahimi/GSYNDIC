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
    <div class="modalBackground">
      <div class="modalContainer">
        <div class="Cree">
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

        <form>
          <div className="formStatut">
            <select
              aria-label="State"
              className="combo-Statut"
              id="comboStatut"
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
              id="ajouteStatut"
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
          <div className="formStatut-Red">
            <select
              aria-label="State"
              className="combo-Statut"
              id="comboCategorie"
              onChange={OnSaveCategory}
            >
              <option value="Statuts" selected>
                Statuts
              </option>
              {Categorie.map((st) => {
                return (
                  <option value={st.categoryName}>{st.categoryName}</option>
                );
              })}
            </select>
            <img
              src="../Media/add.png"
              alt=""
              id="ajouteStatut"
              onClick={() => setopenCategory(true)}
            />

            {openStatut ? (
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
