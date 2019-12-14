class titlebar extends React.Component {
    constructor(props) { super(props); }
    render() {
        let classList = String('navbar navbar-expand-lg ');
        switch(this.props.theme) {
            case 'light': classList += 'navbar-light bg-light text-dark '; break;
            case 'dark': classList += 'navbar-dark bg-dark text-light '; break;
        }
        switch(this.props.position) {
            case 'top': classList += 'fixed-top'; break;
            case 'bottom': classList += 'fixed-bottom'; break;
        }
        return (
            <div className={classList}>{this.props.children}</div>
        )
    }
}
class titlebarBrand extends React.Component {
    constructor(props) { super(props); }
    render() {
        <a className="navbar-brand" href="/">
            {this.props.children}
            <span class={this.props.classes}>{this.props.name}</span>
        </a>
    }
}
class titlebarToggle extends React.Component {
    constructor(props) { super(props); }
    render() {
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={this.props.for}>
            <span className="navbar-toggler-icon"></span>
        </button>
    }
}
class titlebarNavbar extends React.Component {
    constructor(props) { super(props); }
    render() {
        let position = (this.props.position == 'left') ? 'mr-auto' : 'ml-auto';
        <div className="collapse navbar-collapse" id={this.props.id}>
            <ul className={'navbar-nav ' + position}>
                {this.props.children}
            </ul>
        </div>
    }
}
class titlebarLink extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = { active: false }
    }
    render() {
        let isExternal = (this.props.link.startsWith('http')) ? true : false;
        if(!isExternal) {
            <li className="nav-item">
                <a className="nav-link" href={this.props.link}>
                    {this.props.children}
                    <span> {this.props.label}</span>
                </a>
            </li>
        } else {
            <li className="nav-item">
                <a className="nav-link" href={this.props.link} target="_blank">
                    {this.props.children}
                    <span> {this.props.label}</span>
                </a>
            </li>
        }
    }
}