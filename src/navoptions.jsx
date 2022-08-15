function Options(){
    return(
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <select class="nav-item dropdown">
                                <option><a class="dropdown-item" href="#!">All Products</a></option>
                                <li><hr class="dropdown-divider" /></li>
                                <option><a class="dropdown-item" href="#!">Popular Items</a></option>
                                <option><a class="dropdown-item" href="#!">New Arrivals</a></option>
                        </select>
                    </ul>
    )
}
export default Options;