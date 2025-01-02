'use client'

import React, { useState, useEffect } from 'react'

const TextScramble = ({ children, scrambleSpeed = 50 }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [text, setText] = useState('')
  const originalText = React.Children.toArray(children).join('')

  useEffect(() => {
    if (!isHovering) {
      setText(originalText)
      return
    }

    let iteration = 0
    const interval = setInterval(() => {
      setText(prevText =>
        prevText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return String.fromCharCode(65 + Math.floor(Math.random() * 26))
          })
          .join('')
      )

      iteration += 1 / 3
      if (iteration >= originalText.length) {
        clearInterval(interval)
      }
    }, scrambleSpeed)

    return () => clearInterval(interval)
  }, [isHovering, originalText, scrambleSpeed])

  return (
    <span
      className="text-scramble"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {text || children}
    </span>
  )
}

export default TextScramble

