import React from 'react'

export const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div className={`bg-bg-surface border border-border-subtle rounded-lg p-6 ${hover ? "transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1" : ""} ${className}`}
      {...props}>
      {children}
    </div>
  )
}

