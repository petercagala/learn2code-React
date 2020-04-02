// Tu chcem vytvorit novy komponent, ktory bude normalna javascriptova trieda a nazvem si tento komponent App
// V Reacte mozes komponenty vyrabat cez classy, alebo funkcie

// Tymto mam v apke novy html tag App
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dude: 'Marceline the vampire'
        };
    }


    /**
     * My template
     */
    render() {
        // Toto nieje HTMLAllCollection, ale JSX code
        return (
            <div>
                <p>
                     My good friend <strong>{this.state.dude}</strong>
                     <br/>
                     I like {this.state.dude}
                </p>
            </div>
        );
    }

}

// Vyrenderuj novo vzniknuty element App a vyrenderuj kam: do elementu s id root
ReactDOM.render(<App/>, document.getElementById("root"));