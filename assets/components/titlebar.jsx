class titlebar extends React.Component {
    constructor(props) {
        super(props);
    }
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