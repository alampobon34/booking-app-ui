import { Flight } from '@/types'
import React from 'react'

interface Prop{
    flight: Flight
}
const FlightCard = ({flight}: Prop) => {
  return (
    <div>FlightCard</div>
  )
}

export default FlightCard