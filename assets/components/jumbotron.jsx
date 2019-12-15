class jumbotron extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            bgImage: this.props.background,
            bgSize: 'cover',
            bgRepeat: 'no-repeat',
            color: this.props.color
        }
    }
    render() {
        let style = this.state;
        let thisClass = 'jumbotron bg-gradient text-' + this.props.align;

        let thisStyle = String();
        thisStyle += 'background-image: url(' + style.bgImage + ');';
        thisStyle += 'background-size: ' + style.bgSize + ';';
        thisStyle += 'background-repeat: ' + style.bgRepeat + ';';

        return (
            <div className={thisClass} style={thisStyle}>
                <h1 className="display-4">{this.props.header}</h1>
                <p className="lead">{this.props.text}</p>
                {this.props.children}
            </div>
        )
    }
}
// <jumbotron header="Welcome!" text="Your new life awaits!" color="#ffffff" background="/images/dummy.png">
// </jumbotron>