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
  const [newStatus, setNewStatus] = useState({
    idStatus: null,
    statusName: "",
  });
  const [statutcopy, setStatutcopy] = useState({
    idStatus: null,
    statusName: "",
  });
  const [CategoryCopy, setCategoryCopy] = useState({
    idCategory: null,
    categoryName: "",
  });
  /* use state pour Cree Dossier*/
  const [changeStatut, setchangeStatut] = useState("");
  const [changeCategory, setchangeCategory] = useState("");
  const [changeTitre, setchangeTitre] = useState("");
  const [changeDescription, setchangeDescription] = useState("");
  const [postDossier, setPostDossier] = useState();
  const [navStatut, setNavStatut] = useState();
  const [idstat, setIdstat] = useState();
  const [idCat, setIdCat] = useState();
  /*--function pour cree dossier*/

  function OnSaveStatut(e) {
    setchangeStatut(e.target.value);
    newStatus.map((Ns) => {
      if (Ns.statusName == e.target.value) {
        setNavStatut({
          idStatus: Math.floor(Math.random() * 100000000000000),
          statusName: e.target.value,
        });
      }
    });
    Statut.map((st) => {
      if (st.statusName == e.target.value) {
        return setIdstat(st.idStatus);
      }
    });
  }
  function OnSaveCategory(e) {
    setchangeCategory(e.target.value);
    Categorie.map((cat) => {
      if (cat.categoryName == e.target.value) {
        return setIdCat(cat.idCategory);
      }
    });
  }
  function OnSaveTitre(e) {
    setchangeTitre(e.target.value);
  }
  function OnsaveDescription(e) {
    setchangeDescription(e.target.value);
  }
  function onClickCreeDossier() {
    fetch("http://localhost:5052/api/Case", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title: changeTitre,
        description: changeDescription,
        category: idCat,
        status: idstat,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        console.log("success");
      }
      return response.json;
    });
  }
  /*------------------------------------------------------------*/
  /*--------------API-------------------------*/
  var Categ = [];
  var Stat = [];
  var fold = [];
  useEffect(
    async () => {
      await fetch("http://localhost:5052/api/Case/Status")
        .then((Response) => Response.json())
        .then((data) => {
          setStatut(data);
        });

      await fetch("http://localhost:5052/api/Case/Category")
        .then((Response) => Response.json())
        .then((data) => {
          setCategorie(data);
        });
      await fetch("http://localhost:5052/api/Case")
        .then((Response) => Response.json())
        .then((data) => {
          fold = data;
        });
      setFoundUsers(fold);
      setFolders(fold);
    },
    [setStatut],
    [setCategorie]
  );

  /*-----------------------------------------------------*/
  /*Fonction */
  function handleChangeStatut(e) {
    e.preventDefault();
    setStatutcopy({ ...statutcopy, statusName: e.target.value });
    setNewStatus(statutcopy);
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
