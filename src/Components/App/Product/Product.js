const Product = () => {
    return (
      <>
        <div className="container mt-4">
            <div className="row justify-content-between">
               
                <div className=" bg-primary col-md-2 text-center rounded-3"><img src={require("../img/8.png")}   className="img-fluid rounded-circle w-75 p-2 text-center"/><p className="text-white mt-2">برنج</p></div>
                <div className=" bg-danger col-md-2 text-center rounded-3"><img src={require("../img/9.png")}   className="img-fluid rounded-circle w-75 p-2 text-center"/><p className="text-white mt-2">چای و قهوه</p></div>
                <div className=" bg-warning col-md-2 text-center rounded-3"><img src={require("../img/10.png")}  className="img-fluid rounded-circle w-75 p-2 text-center"/><p className="text-white mt-2">لبنیات و بستنی</p></div>
                <div className=" bg-success col-md-2 text-center rounded-3"><img src={require("../img/11.png")}  className="img-fluid rounded-circle w-75 p-2 text-center"/><p className="text-white mt-2">مواد شوینده</p></div>
                <div className=" bg-secondary col-md-2 text-center rounded-3"><img src={require("../img/12.png")}  className="img-fluid rounded-circle w-75 p-2 text-center"/><p className="text-white mt-2">آب آشامیدنی</p></div>
            </div>
        </div>
      </>
    );
  };
  export default Product;
   