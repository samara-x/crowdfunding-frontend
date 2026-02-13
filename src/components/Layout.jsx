import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <section className="home-footer">
                <p>
                    FundingFour is built for real people helping real causes — one small
                    group at a time.
                </p>
                <p>&copy; 2026 Created by Samara Downey. All rights reserved.</p>
            </section>
        </div>
    );
}

export default Layout;


      {/* Trust / Footer Bar
      <section className="home-footer">
        <p>
          FundingFour is built for real people helping real causes — one small
          group at a time.
        </p>

        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </section>
    </div>
  );
}
*/}