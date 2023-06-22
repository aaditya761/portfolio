import variables from  '../styles/component.module.scss';
function Navbar(){
    return(
        <div className={variables.nav_container}>
            <div>
                <div className={variables.nav_title}>
                    Block Developers
                </div>
            </div>
            <div className={variables.nav_right}>
                <div className={variables.nav_item}>
                    Services
                </div>
                <div className={variables.nav_item}>
                    Projects
                </div>
                <div className={variables.nav_item}>
                    About Us
                </div>
                <div className={variables.nav_item}>
                    Contact
                </div><div className={variables.nav_item}>
                    Testimonials
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;