import React from 'react';


function TopBar() {
	return (
		<React.Fragment>
			
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

				
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">

				</button>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
						</a>
					</li>
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
						</a>
					</li>
					<li className="nav-item dropdown no-arrow">
						<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>

						</a>
					</li>

				</ul>

			</nav>
		</React.Fragment>
	)
}
export default TopBar;