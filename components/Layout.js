import '../styles/global.css';

function Layout(props) {
    return (
        <div className="font-sans">
            <h1 className="bg-gray-500">Hola</h1>
            {props.children}
        </div>
    )
}

export default Layout