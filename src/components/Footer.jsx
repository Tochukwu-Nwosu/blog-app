import moment from "moment"

const Footer = () => {
  let year = moment().format('YYYY')

  return (
    <footer className="w-full h-[58px] absolute bottom-0 inset-x-0 top-full bg-white dark:bg-slate-950">
        <div className="max-w-[1024px] mx-auto py-4 text-center border-t-2 text-gray-600 dark:border-gray-800 dark:text-gray-400">
            <p>Copyright &copy; {year} TK Blog</p>
        </div>
    </footer>
  )
}

export default Footer
