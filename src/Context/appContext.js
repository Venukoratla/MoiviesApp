import React from 'react'

const appContext = React.createContext({
  username: '',
  password: '',
  closeNavBar: false,
  triggerCloseNavBar: () => {},
  triggerChangeUsername: () => {},
  triggerChangePassword: () => {},
  triggerLogout: () => {},
  searchInput: '',
  triggerSearchChange: () => {},
})

export default appContext
