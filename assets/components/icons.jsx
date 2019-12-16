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
            <i 
                data-toggle="tooltip" 
                title={this.props.title || ''} 
                className={classList} 
                style={colorIcon + styleList}
            ></i>
        )
    }
}
// <icon type="brand" name="discord" color="#7289da" title="Discord" />
// <icon type="duotone" name="book" primary="red" secondary="blue" />