import { Apartment } from '@/types/apartment-types'
import React from 'react'
import ApartmentCard from './ApartmentCard'

export default function ApartmentList({apartments} : {apartments: Apartment[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {apartments.map((listing) => (
      <ApartmentCard key={listing.unitNumber} apartment={listing} />
    ))}
  </div>
  )
}
