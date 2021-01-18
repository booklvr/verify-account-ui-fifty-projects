import React, { useState, useRef, useEffect } from 'react'

const CODE = '123456'

const VerifyAccountUI = () => {
  const [codeInput, setCodeInput] = useState('')
  const [verified, setVerified] = useState(false)

  const itemEls = useRef(new Array())

  const inputs = []

  const getValue = () => {
    itemEls.current.forEach((el) => console.log(el.value))
  }

  for (let i = 0; i < 6; i++) {
    inputs.push(
      <input
        ref={(element) => itemEls.current.push(element)}
        key={i}
        type='number'
        className='code'
        placeholder='0'
        min='0'
        max='9'
        id={i + 1}
        required
        onKeyDown={(e) => {
          if (e.key >= 0 && e.key <= 9) {
            itemEls.current[i].value = ''

            if (i < 5) {
              setTimeout(() => itemEls.current[i + 1].focus(), 10)
            }
          } else if (e.key === 'Backspace') {
            if (i > 0) {
              setTimeout(() => itemEls.current[i - 1].focus(), 10)
            }
          }
        }}
        onKeyUp={(e) => {
          if (e.target.value && i === 5) {
            itemEls.current.forEach((el) => console.log(el.value))
            let code = itemEls.current.reduce((acc, curr) => {
              return acc + curr.value
            }, '')
            console.log(typeof code)
            setCodeInput(code)
          }
        }}
        style={{
          backgroundColor: `${verified ? 'green' : 'white'}`,
        }}
      />
    )
  }

  useEffect(() => {
    if (codeInput === CODE) {
      setVerified(true)
    }
  }, [codeInput, verified])

  return (
    <div className='container'>
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to cool_guy@email.com <br /> Enter the
        code below to confirm your email address.
      </p>
      <div className='code-container'>{inputs}</div>
      <small className='info'>
        This is design only. We didn't actually send you an email as we don't
        have your email, right?
      </small>
    </div>
  )
}

export default VerifyAccountUI
