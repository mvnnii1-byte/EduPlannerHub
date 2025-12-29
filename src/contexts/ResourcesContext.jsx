import { createContext, useContext, useState } from 'react'

const ResourcesContext = createContext()

export function ResourcesProvider({ children }) {
  const [resources, setResources] = useState([])

  const addResource = (resource) => {
    const newResource = {
      id: Date.now(),
      ...resource,
      date: new Date().toLocaleDateString('ar-SA'),
    }
    setResources(prev => [newResource, ...prev])
  }

  return (
    <ResourcesContext.Provider value={{ resources, addResource }}>
      {children}
    </ResourcesContext.Provider>
  )
}

export function useResources() {
  return useContext(ResourcesContext)
}
