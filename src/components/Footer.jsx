import moment from "moment"

const Footer = () => {
  let year = moment().format('YYYY')

  return (
    <footer className="footer-wrapper1">
        <div className="footer-wrapper2">
            <p>Copyright &copy; {year} TK Blog</p>
        </div>
    </footer>
  )
}

export default Footer
