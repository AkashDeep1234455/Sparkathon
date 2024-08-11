import "./Footer.css"

export default function Footer(){
    return(
        <div className="Footer">
            <div className="horizontalLine"></div>

            <div className="footer-content">
                <div className="footer-left">
                    <div>
                        <a href="#">Privacy Policy</a>
                        &nbsp; • &nbsp;
                        <a href="#">Terms of Services</a>
                    </div>
                    <p>Copyright &copy; Sparkathon 2024</p>
                </div>
                <div className="footer-right"></div>
            </div>
        </div>
    )
}