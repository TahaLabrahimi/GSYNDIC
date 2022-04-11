import React from "react";

export default function Dossier({folder}) {
  return (
      <div className="note">
        <div className="dossier-image"></div>
        <div id="statut">
             {folder.statusNavigation.statusName}
        </div>
        <p>{folder.title}</p>
      
    </div>
  ); 
}
