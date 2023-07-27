import moment from "moment"

const Footer = () => {
  let year = moment().format('YYYY')

  return (
    <footer className="max-w-[1024px] py-4 text-center mx-auto mt-8 border-t-2 text-gray-600 dark:border-gray-800 dark:text-gray-400">
      <p>Copyright &copy; {year} TK Blog</p>
    </footer>
  )
}

export default Footer
