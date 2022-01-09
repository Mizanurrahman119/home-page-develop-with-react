import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <span>Movie list</span>
            </div>

            <div>
                <a href="Home">Home</a>
                <a href="Movies">Movies</a>
                <a href="Serials">Serials</a>
                <a href="Favorite">Favorite</a>
                <a href="My list">My list</a>
            </div>

            <div className='search-bar'>
                <form onSubmit="">
                    <input type="text" name="text" id="" placeholder="search" />
                    <button type='submit'><i className='fa  fa-search'></i></button>
                </form>
            </div>
            <div>
                <a className='login' href='login'>Login</a>
                <button className='sign-up'>Sign up</button>
            </div>
        </div>
    );
};

export default Header;