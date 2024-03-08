
const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="/public/index.html">REPO</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer