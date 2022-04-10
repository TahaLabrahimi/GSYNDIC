import React, { useState } from "react";
export default function DossierFilter({
  Categorie,
  Statut,
  Folders,
  setFoundUsers,
}) {
  const filterCategory = (e) => {
    const st = e.target.value;
    if (st !== "Category") {
      const rs = Folders.filter((folder) => {
        return folder.categoryNavigation.categoryName.toLowerCase().includes(st.toLowerCase());
      });
      setFoundUsers(rs);
    } else {
      setFoundUsers(Folders);
    }
  };

  const filterstatut = (e) => {
    const st = e.target.value;
    if (st !== "Statut") {
      const rs = Folders.filter((folder) => {
        return folder.statusNavigation.statusName.toLowerCase().includes(st.toLowerCase());
      });
      setFoundUsers(rs);
    } else {
      setFoundUsers(Folders);
    }
  };
  const filterInput = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = Folders.filter((folder) => {
        return folder.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(Folders);
    }
  };
  return (
    <div class="filter">
      <i className="bx bx-search"></i>
      <input type="text" placeholder="Filter..." onChange={filterInput} />
      <form>
        <select aria-label="State" class="combo-statut" onChange={filterstatut}>
          <option selected value="Statut">
            Statut
          </option>
          {Statut.map((st) => {
            return <option value={st.statusName}>{st.statusName}</option>;
          })}
        </select>
      </form>
      <form>
        <select
          aria-label="State"
          class="combo-Categorie"
          onChange={filterCategory}
        >
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
