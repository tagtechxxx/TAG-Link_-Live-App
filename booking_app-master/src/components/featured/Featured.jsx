import "./featured.css"

function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/613095.jpg?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>891 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h2>732 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Lagos</h1>
                <h2>389 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured

