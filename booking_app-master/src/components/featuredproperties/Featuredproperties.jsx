import "./featuredproperties.css"

function Featuredproperties() {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Old Town, Poland, Kraków</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Excellent · 2,073 reviews</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Apartments Budapest</span>
            <span className="fpCity">Hungary, Budapest</span>
            <span className="fpPrice">Starting from $135</span>
            <div className="fpRating">
                <button>8.8</button>
                <span>Excellent · 7,334 reviews</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Oriente Palace Apartments</span>
            <span className="fpCity">Madrid City Center</span>
            <span className="fpPrice">Starting from $131</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent · 2,577 reviews</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">numa I Vita Apartments</span>
            <span className="fpCity">Fortezza da Basso, Italy</span>
            <span className="fpPrice">Starting from $215</span>
            <div className="fpRating">
                <button>9.3</button>
                <span>Wonderful · 946 reviews</span>
            </div>
        </div>
    </div>
  )
}

export default Featuredproperties