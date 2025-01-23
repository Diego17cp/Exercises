import { Toaster } from 'sonner'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'

function App() {

  return (
    <>
    <ListOfUsers></ListOfUsers>
    <CreateNewUser></CreateNewUser>
    <Toaster richColors></Toaster>
    </>
  )
}

export default App
