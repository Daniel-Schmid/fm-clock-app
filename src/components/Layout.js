function Layout(props) {
  return(
    <div className="h-screen bg-cover bg-no-repeat bg-center bg-desktop-day">
      <div className="bg-black bg-opacity-25 h-full">
        {props.children}
      </div>
    </div>

  )
}

export default Layout