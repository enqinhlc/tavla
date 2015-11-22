App = React.createClass({
    render() {
        return (
            <div className="wrapper">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Tavla</a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className={FlowRouter.getRouteName() === "Home" ? "active" : ""}>
                                    <a href="/">Home</a>
                                </li>
                                <li className={FlowRouter.getRouteName() === "About" ? "active" : ""}>
                                    <a href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    {this.props.content}
                </div>
            </div>
        );
    }
});
