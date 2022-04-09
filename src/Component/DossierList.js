import React from 'react'
import Dossier from './Dossier'
export default function DossierList({foundUsers}) {
  return (
    <>
      {
        foundUsers.map((folder) => <Dossier folder={folder} />)
     }
    </>
  )
}
