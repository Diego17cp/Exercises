import { Toaster } from 'sonner'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'

function App() {

  // TODO: Implement the following:
  // - Edit a user
  // - Show toasts when a user is added, or edited

  return (
    <>
    <ListOfUsers></ListOfUsers>
    <CreateNewUser></CreateNewUser>
    <Toaster richColors></Toaster>
    </>
  )
}

export default App
