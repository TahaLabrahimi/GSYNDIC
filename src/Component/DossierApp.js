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
  const [newCategory, setNewCategory] = useState([]);
  const [Statut, setStatut] = useState([]);
  const [newStatus, setNewStatus] = useState([]);
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
  const [postDossier, setPostDossier] = useState({});
  const [navStatut, setNavStatut] = useState();
  const [navCateg, setNavCateg] = useState();
  const [idstat, setIdstat] = useState();
  const [idCat, setIdCat] = useState();
  /*--function pour cree dossier*/

  function OnSaveStatut(e) {
    var test = 0;
    setchangeStatut(e.target.value);
    newStatus.map((Ns) => {
      if (Ns.statusName == e.target.value) {
        console.log(Ns.statusName, e.target.value);
        setNavStatut({
          idStatus: Math.floor(Math.random() * 10000),
          statusName: e.target.value,
        });
        test = 1;
      }
    });
    if (test == 1) {
      console.log("new");
    } else {
      Statut.map((st) => {
        if (st.statusName == e.target.value) {
          setIdstat(st.idStatus);
        }
      });
      console.log("old");
    }
  }
  function OnSaveCategory(e) {
    var test = 0;
    setchangeCategory(e.target.value);
    newCategory.map((Nc) => {
      if (Nc.categoryName == e.target.value) {
        console.log(Nc.categoryName, e.target.value);
        setNavCateg({
          idCategory: Math.floor(Math.random() * 10000),
          categoryName: e.target.value,
        });
        test = 1;
      }
    });
    if (test == 1) {
      console.log("new");
    } else {
      Categorie.map((ct) => {
        if (ct.categoryName == e.target.value) {
          setIdCat(ct.idCategory);
        }
      });
      console.log("old");
    }
  }
  function OnSaveTitre(e) {
    setchangeTitre(e.target.value);
  }
  function OnsaveDescription(e) {
    setchangeDescription(e.target.value);
  }
  function onClickCreeDossier() {
    var s = 0;
    var s1 = 0;
    var a = {};
    var a1 = {};
    if (navStatut == null) {
      s = idstat;
      a = null;
    } else {
      a = navStatut;
      s = 0;
    }
    if (navCateg == null) {
      s1 = idCat;
      a1 = null;
    } else {
      a1 = navCateg;
      s1 = 0;
    }
    console.log(s1, a1);
    fetch("http://localhost:5052/api/Case", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title: changeTitre,
        description: changeDescription,
        status: s,
        statusNavigation: a,
        category: s1,
        categoryNavigation: a1,
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
  }
  function handeCreateStatut(e) {
    setStatut([...Statut, statutcopy]);
    setNewStatus([...newStatus, statutcopy]);
    console.log(newStatus);
  }

  function handleChangeCategory(s) {
    s.preventDefault();
    setCategoryCopy({ ...CategoryCopy, categoryName: s.target.value });
    console.log(CategoryCopy);
  }

  function handleCreateCategory(s) {
    setCategorie([...Categorie, CategoryCopy]);
    setNewCategory([...newCategory, CategoryCopy]);
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
