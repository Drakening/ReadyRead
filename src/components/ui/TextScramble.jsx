'use client'

import React, { useState, useEffect, useRef } from 'react'

const TextScramble = ({ children, scrambleSpeed = 50 }) => {
  const [text, setText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const originalText = React.Children.toArray(children).join('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) {
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
  }, [isVisible, originalText, scrambleSpeed])

  return (
    <span ref={elementRef} className="text-scramble">
      {text || children}
    </span>
  )
}

export default TextScramble

