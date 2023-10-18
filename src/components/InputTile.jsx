import React from 'react'

const InputTile = ({ name, label, value, onChange }) => {
  return (
      // <div className="mb-4 flex items-center justify-between">
      <div className='grid grid-cols-2 mb-2'>
      <label className="block text-white text-sm font-bold mr-2" htmlFor="inputField">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="inputField"
              type="text"
              name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputTile