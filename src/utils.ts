export const getPathName = () => (typeof window !== 'undefined' ? window.location.pathname : '')

export const isMain = () => {
  const pathname = getPathName()
  return pathname === '/'
}
