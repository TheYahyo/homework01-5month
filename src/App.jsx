import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Users, Main, Posts, HeaderPage, Ins } from "./pages"

const App = () => {
    return (
        <Router>
            <Routes>
            <Route element={<HeaderPage />} path="/">
                    <Route element={<Main />} path='/' />
                    <Route element={<Users />} path='/users' />
                    <Route element={<Posts />} path='/posts' />
                    <Route element={<Ins/>} path="/ins"/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App