import Appbar from "../AppBar/AppBar";

const Layout = ({children}) => {
    return (
        <>
            <Appbar />
            {children}
        </>
    )
}

export default Layout;