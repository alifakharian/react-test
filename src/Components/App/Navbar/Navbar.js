const Navbar = ()=>{
    return(
        <>
        <nav class="navbar  navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="javascript:void(0)">صفحه اصلی</a> */}
    <img src={require("../img/1.png")} className="img-fluid"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar" dir="rtl">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">صفحه اصلی</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">محصولات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">آدرس</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">تماس با ما</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;