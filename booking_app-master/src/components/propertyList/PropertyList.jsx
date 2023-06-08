import "./propertyList.css"

function PropertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>949,704 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>1,011,961 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>19,183 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>545,392 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/52979454.jpeg?k=98337a30d1016ebce1cbebb9e24ba4585f535438bc455ff9efcaee27960ac8b2&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>40,957 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList