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
  onClickCreeDossier
}) {
  const [openStatut, setopenStatut] = useState(false);
  const [openCategory, setopenCategory] = useState(false);
  function closeModal(){setopen(false)}
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
        <input type="text" class="inputDescription" onChange={OnsaveDescription} />
        <br />
        <button class="btn-Creer" onClick={() => {
          closeModal();
          onClickCreeDossier();}}>
          Creer
        </button>
        <form className="formStatut">
          <select aria-label="State" className="combo-Statut" id="comboCategorie" onChange={OnSaveStatut}>
            <option value="Select">Statuts</option>
            {Statut.map((st) => {
              return <option value={st.statusName}>{st.statusName} </option>;
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
        </form>
        <form className="formCategory">
          <select aria-label="Category" className="combo-Category" id="comboCategorie" onChange={OnSaveCategory}>
            <option value="Category">Categorie</option>
            {Categorie.map((cat) => {
              return <option value={cat.categoryName}>{cat.categoryName} </option>;
            })}
          </select>
          <img
            src="../Media/add.png"
            alt=""
            className="plusCat"
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
        </form>
      </div>
    </div>
  );
}
