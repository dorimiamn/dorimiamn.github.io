export default function Header() {
  return (
    <>
    <div className="flex justify-center mx-auto py-6 bg-gray-300">
      <p className="text-3xl">
      このサイトは移転しました。
      <br />
      新しいサイトは
      <br />
      <a href="https://dorimiamn.dev/" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">dorimiamn.dev</a>
      <br />
      です。
      </p>
    </div>
    <nav className="flex flex-row h-12 w-4/6 mx-auto my-4">
      <div className="basis-5/6">
        <a href="/">dorimiamn's <br/> Portfolio</a>
      </div>
      <div className="basis-1/6 text-center">
        <a href="/blog">Blog</a>
      </div>
    </nav>
    </>
  )
}