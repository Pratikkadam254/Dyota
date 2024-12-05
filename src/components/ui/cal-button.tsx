'use client'

import { FC, useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"

interface CalButtonProps {
  className?: string
  children: React.ReactNode
}

export const CalButton: FC<CalButtonProps> = ({ className, children }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view"
      })
    })()
  }, [])

  return (
    <button
      data-cal-link="dyota/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={className}
    >
      {children}
    </button>
  )
} 