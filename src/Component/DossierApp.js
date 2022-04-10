import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import DossierCreator from "./DossierCreator";
import DossierFilter from "./DossierFilter";
import DossierList from "./DossierList";
import "./Style.css";
export default function DossierApp() {
  /*-------Use States--------*/
  const [Folders, setFolders] = useState([]);
  const [foundUsers, setFoundUsers] = useState(Folders);
  const [Categorie, setCategorie] = useState([]);
  const [Statut, setStatut] = useState([]);
  const [statutcopy, setStatutcopy] = useState({
    id_Statut: null,
    Statut: "",
  });
  const [CategoryCopy, setCategoryCopy] = useState({
    id_Categorie: null,
    categorie: "",
  });
  /* use state pour Cree Dossier*/
  const [changeStatut, setchangeStatut] = useState("");
  const [changeCategory, setchangeCategory] = useState("");
  const [changeTitre, setchangeTitre] = useState("");
  const [changeDescription, setchangeDescription] = useState("");
  /*--function pour cree dossier*/
  function OnSaveStatut(e) {
    setchangeStatut(e.target.value);
  }
  function OnSaveCategory(e) {
    setchangeCategory(e.target.value);
  }
  function OnSaveTitre(e) {
    setchangeTitre(e.target.value);
  }
  function OnsaveDescription(e) {
    setchangeDescription(e.target.value);
  }
  function onClickCreeDossier() {
    setFoundUsers([
      ...foundUsers,
      {
        id_folder: 5,
        titre: changeTitre,
        categorie: changeCategory,
        statut: changeStatut,
        description: changeDescription,
      },
    ]);
  }
  /*------------------------------------------------------------*/
  /*--------------API-------------------------*/
  useEffect(
    () => {
      fetch("http://localhost:5052/api/Case/Status")
        .then((Response) => Response.json())
        .then((data) => {
          setStatut(data);
        });

      fetch("http://localhost:5052/api/Case/Category")
        .then((Response) => Response.json())
        .then((data) => {
          setCategorie(data);
        });
      fetch("http://localhost:5052/api/Case")
        .then((Response) => Response.json())
        .then((data) => {
          setFolders(data);
          
        });
    },
    [setStatut],
    [setCategorie],
    [setFolders]
  );
  /*-----------------------------------------------------*/
  /*Fonction */
  function handleChangeStatut(e) {
    e.preventDefault();
    setStatutcopy({ ...statutcopy, Statut: e.target.value });
  }

  function handeCreateStatut(e) {
    setStatut([...Statut, statutcopy]);
  }

  function handleChangeCategory(s) {
    s.preventDefault();
    setCategoryCopy({ ...CategoryCopy, Categorie: s.target.value });
  }

  function handleCreateCategory(s) {
    setCategorie([...Categorie, CategoryCopy]);
  }

  /*-------------------------------------------------------------*/
  return (
    <div>
      <Header />
      <SideBar />
      <DossierCreator
        Categorie={Categorie}
        Statut={Statut}
        onChange={handleChangeStatut}
        onClick={handeCreateStatut}
        onChangeCategory={handleChangeCategory}
        onClickCategory={handleCreateCategory}
        OnSaveStatut={OnSaveStatut}
        OnSaveCategory={OnSaveCategory}
        OnSaveTitre={OnSaveTitre}
        OnsaveDescription={OnsaveDescription}
        onClickCreeDossier={onClickCreeDossier}
      />
      <DossierFilter
        Categorie={Categorie}
        Statut={Statut}
        Folders={Folders}
        setFolders={setFolders}
        foundUsers={foundUsers}
        setFoundUsers={setFoundUsers}
      />
      <div className="postes">
        <DossierList Folders={Folders} foundUsers={foundUsers} />
      </div>
    </div>
  );
}
