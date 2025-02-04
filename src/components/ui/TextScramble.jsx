import React, { useState, useEffect, useRef } from "react"
import './textscramble'

const TextScramble = ({ children, scrambleSpeed = 50 }) => {
  const [text, setText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const originalText = React.Children.toArray(children).join("").toLowerCase()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
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
      setText((prevText) =>
        originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return char
            }
            return char === " " ? " " : String.fromCharCode(97 + Math.floor(Math.random() * 26))
          })
          .join(""),
      )

      iteration += 1 / 3
      if (iteration >= originalText.length) {
        clearInterval(interval)
      }
    }, scrambleSpeed)

    return () => clearInterval(interval)
  }, [isVisible, originalText, scrambleSpeed])

  return (
    <span ref={elementRef} className="text-scramble" aria-label={originalText}>
      <span className="invisible">{originalText}</span>
      <span className="visible">{text || originalText}</span>
    </span>
  )
}

export default TextScramble

