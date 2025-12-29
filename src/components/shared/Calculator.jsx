import { useState } from 'react'
import { Calculator as CalculatorIcon } from 'lucide-react'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num))
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <CalculatorIcon className="w-6 h-6 ml-2 text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">آلة حاسبة</h2>
      </div>

      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        {/* Display */}
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <div className="text-right text-white text-3xl font-mono overflow-x-auto">
            {display}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button
            onClick={clear}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            مسح
          </button>
          <button
            onClick={() => inputOperation('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            ÷
          </button>
          <button
            onClick={() => inputOperation('*')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber(7)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            7
          </button>
          <button
            onClick={() => inputNumber(8)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            8
          </button>
          <button
            onClick={() => inputNumber(9)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            9
          </button>
          <button
            onClick={() => inputOperation('-')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            −
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber(4)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            4
          </button>
          <button
            onClick={() => inputNumber(5)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            5
          </button>
          <button
            onClick={() => inputNumber(6)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            6
          </button>
          <button
            onClick={() => inputOperation('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            +
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber(1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            1
          </button>
          <button
            onClick={() => inputNumber(2)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            2
          </button>
          <button
            onClick={() => inputNumber(3)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            3
          </button>
          <button
            onClick={performCalculation}
            className="row-span-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber(0)}
            className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition-colors"
          >
            .
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator

