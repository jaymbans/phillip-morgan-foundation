import React from 'react'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CakeIcon from '@mui/icons-material/Cake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

function Card({ info }) {
  const iconLookup = {
    "money": AttachMoneyIcon,
    "food": FoodBankIcon,
    "volunteer": VolunteerActivismIcon,
    "cake": CakeIcon,
    "transportation": DirectionsSubwayFilledIcon,
    "medical": MedicalServicesIcon
  }

  const IconComponent = iconLookup[info.icon]

  return (
    <div className="card">
      {
        info.icon && <IconComponent />
      }
      <h5>{info.title}</h5>
      <p>{info.description}</p>
    </div>
  )
}

export default Card