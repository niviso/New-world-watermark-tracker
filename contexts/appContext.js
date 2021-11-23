
import React, { useState } from 'react';

const AppContext = React.createContext([{}, () => {}]);
const AppProvider = (props) => {
  const [AppState, setAppState] = useState({
    watermark:{
      head:{
        name: 'Head',
        score: 500,
        isEnabled: true

      },
      chest: {
        name: 'Chest',
        score: 500,
        isEnabled: true
      },
      hands:{
        name: 'Hands',
        score: 500,
        isEnabled: true

      },
      legs:{
        name: 'Legs',
        score: 500,
        isEnabled: true

      },
      feet:{
        name: 'Feet',
        score: 500,
        isEnabled: true
        
      },
      shield:{
        name: 'Shield',
        score: 500,
        isEnabled: true

      },
      amulet:{
        name: 'Amulet',
        score: 500,
        isEnabled: true

      },
      ring:{
        name: 'Ring',
        score: 500,
        isEnabled: true

      },
      earrings:{
        name: 'Earrings',
        score: 500,
        isEnabled: true

      },
      sword:{
        name: 'Sword',
        score: 500,
        isEnabled: true

      },
      rapier:{
        name: 'Rapier',
        score: 500,
        isEnabled: true

      },
      hatchet:{
        name: 'Hatchet',
        score: 500,
        isEnabled: true

      },
      spear:{
        name: 'Spear',
        score: 500,
        isEnabled: true

      },
      greatAxe:{
        name: 'Great axe',
        score: 500,
        isEnabled: true

      },
      warHammer:{
        name: 'War hammer',
        score: 500,
        isEnabled: true

      },
      bow:{
        name: 'Bow',
        score: 500,
        isEnabled: true

      },
      musket:{
        name: 'Musket',
        score: 500,
        isEnabled: true

      },
      fireStaff:{
        name: 'Fire staff',
        score: 500,
        isEnabled: true

      },
      lifeStaff:{
        name: 'Life staff',
        score: 500,
        isEnabled: true

      },
      iceGauntlet:{
        name: 'Ice gauntlet',
        score: 500,
        isEnabled: true

      },
      voidGauntlet:{
        name: 'Void gauntlet',
        score: 500,
        isEnabled: true

      }

    }
  });
  return (
    <AppContext.Provider value={[AppState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };