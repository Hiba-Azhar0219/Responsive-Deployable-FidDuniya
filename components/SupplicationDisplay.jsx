'use client'
import React, { useState, useEffect } from 'react'
import SupplicationCard from './SupplicationCard' // Assuming SupplicationCard.js is in the same directory

const SupplicationDisplay = ({ category }) => {
  const [supplications, setSupplications] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json') // Assuming data.json is in the public directory
        const data = await response.json()
        const filteredSupplications = data.filter(
          (item) => item.category === category
        )
        setSupplications(filteredSupplications)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Optionally set an error state to display an error message
      }
    }

    fetchData()
  }, [category]) // Re-fetch data if the category prop changes

  return (
    <div>
      {supplications.map((supplication, index) => (
        <SupplicationCard
          key={index}
          arabic={supplication.arabic}
          translation={supplication.translation}
        />
      ))}
    </div>
  )
}

export default SupplicationDisplay
