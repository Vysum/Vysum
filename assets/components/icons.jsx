class icon extends React.Component {
    constructor(props) { super(props) }
    render() {
        let classList = String();
        let styleList = String();
        switch(this.props.type) {
            case 'brand': classList += 'fab '; break;
            case 'solid': classList += 'fas '; break;
            case 'regular': classList += 'far '; break;
            case 'light': classList += 'fal '; break;
            case 'duotone': classList += 'fad '; break;
        }
        classList += ('fa-' + this.props.name);
        if(this.props.type == 'duotone') {
            styleList += '--fa-primary-color: ' + this.props.primary + ' !important;';
            styleList += '--fa-secondary-color: ' + this.props.secondary + ' !important;';
        }
        let colorIcon = 'color: inherit;';
        if(this.props.color !== '' && this.props.color !== undefined) {
            colorIcon = 'color: ' + this.props.color + ';';
        }
        return (
            <i className={classList} style={colorIcon + styleList}></i>
        )
    }
}