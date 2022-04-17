import React, { useState } from "react";
export default function DossierFilter({
  Categorie,
  Statut,
  Folders,
  setFoundUsers,
  foundUsers,
}) {
  const [filtSt, setFiltSt] = useState("");
  const [filtCat, setFiltCat] = useState("");
  const [filtInp, setFiltInp] = useState("");
  const Fcat = (st, cn) => {
    if (st !== "Category" && st !== "") {
      return cn.toLowerCase().startsWith(st.toLowerCase());
    } else {
      return cn;
    }
  };
  const FInp = (st, cn) => {
    if (st != "") {
      return cn.toLowerCase().startsWith(st.toLowerCase());
    } else {
      return cn;
    }
  };
  const Fst = (st, cn) => {
    if (st != "Statut" && st != "") {
      return cn.toLowerCase().startsWith(st.toLowerCase());
    } else {
      return cn;
    }
  };
  const filterCategory = (e) => {
    setFiltCat(e.target.value);
    const results = Folders.filter((folder) => {
      return (
        (folder.categoryNavigation == null
          ? Fcat(e.target.value, "Category")
          : Fcat(e.target.value, folder.categoryNavigation.categoryName)) &&
        (folder.statusNavigation == null
          ? Fst(filtSt, "Statut")
          : Fst(filtSt, folder.statusNavigation.statusName)) &&
        FInp(filtInp, folder.title)
      );
    });
    setFoundUsers(results);
  };
  const filterstatut = (e) => {
    setFiltSt(e.target.value);
    const results = Folders.filter((folder) => {
      return (
        (folder.categoryNavigation == null
          ? Fcat(filtCat, "Category")
          : Fcat(filtCat, folder.categoryNavigation.categoryName)) &&
        (folder.statusNavigation == null
          ? Fst(e.target.value, "Statut")
          : Fst(e.target.value, folder.statusNavigation.statusName)) &&
        FInp(filtInp, folder.title)
      );
    });
    setFoundUsers(results);
    console.log(foundUsers);
  };
  const filterInput = (e) => {
    setFiltInp(e.target.value);
    const results = Folders.filter((folder) => {
      return (
        (folder.categoryNavigation == null
          ? Fcat(filtCat, "Category")
          : Fcat(filtCat, folder.categoryNavigation.categoryName)) &&
        (folder.statusNavigation == null
          ? Fst(filtSt, "Statut")
          : Fst(filtSt, folder.statusNavigation.statusName)) &&
        FInp(e.target.value, folder.title)
      );
    });
    setFoundUsers(results);
  };
  return (
    <div class="filter">
      <i className="bx bx-search"></i>
      <input type="text" placeholder="Filter..." onChange={filterInput} maxlength="40"/>
      <form>
        <select class="comboStatut" onChange={filterstatut}>
          <option selected value="Statut">
            Statut
          </option>
          {Statut.map((st) => {
            return <option value={st.statusName}>{st.statusName}</option>;
          })}
        </select>
      </form>
      <form>
        <select class="comboCategorie" onChange={filterCategory}>
          <option selected value="Category">
            Category
          </option>
          {Categorie.map((cat) => {
            return <option value={cat.categoryName}>{cat.categoryName}</option>;
          })}
        </select>
      </form>
    </div>
  );
}
