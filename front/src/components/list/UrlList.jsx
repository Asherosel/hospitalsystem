import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const UrlList = ({ urls, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Mevcut URL'ler</h2>

      {urls.length === 0 ? (
        <p className="text-gray-500 italic">Henüz URL eklenmedi.</p>
      ) : (
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {urls.map((url, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center border border-gray-200 rounded px-4 py-2"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {url}
              </a>
              <button
                onClick={() => onRemove(idx)}
                className="text-red-500 hover:text-red-700"
                aria-label={`URL Sil ${url}`}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UrlList
