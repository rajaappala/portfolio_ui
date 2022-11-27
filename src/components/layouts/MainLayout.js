import { Link } from "react-router-dom"

function MainLayout(){
    return <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}> All Meetups </Link>
                    </li>
                    <li>
                        <Link to={'/new-meetup'} > New Meetups </Link>
                    </li>
                    <li>
                        <Link to={'/favourites'} > My Favourites </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
}

export default MainLayout