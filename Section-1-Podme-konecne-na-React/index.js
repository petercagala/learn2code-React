// Tu chcem vytvorit novy komponent, ktory bude normalna javascriptova trieda a nazvem si tento komponent App
// V Reacte mozes komponenty vyrabat cez classy, alebo funkcie

// Tymto mam v apke novy html tag App
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dude: 'Marceline the vampire',
            characters: [
                {
                    id: 1,
                    who: 'Peter Cagala',
                    what: 'Java Developer',
                    cool: 12
                },
                {
                    id: 2,
                    who: 'Katarina Cagalova',
                    what: 'Uctovnicka',
                    cool: 56
                }
            ]
        };
    }

    // React sa vyziva v ES6: pouzi arrow function, budes mat pristup k this: arrow function si nevytvaraju v
    // vlastny context pre this, teda v tomto pripade this sa bude odkazovat na cely komponent App
    handleChange = event => {
        //target:  Na ktorom elemente presne zmena nastala
        console.log(event.target.value);
        this.setState({
            dude: event.target.value
        });

    }

    /**
     * Akoze listOfDudes component
     */
    listOfDudes = () => {
        const dudeWhoList = this.state.characters.map(dude => (
            <li key={dude.id} className={dude.who.split(' ').length < 3 ? "strong": ""}>
                {dude.who}

                {dude.who.split(' ').length < 3 && (
                    <small>
                        <strong> -lol , short name</strong>
                    </small>
                )} 
            </li>
        ));

        return dudeWhoList;
    }

     handleSubmit = event => {
         event.preventDefault();

         console.log(event.key);

         alert(this.state.dude);

         const newDude =  {
             id: 99,
             who: this.state.dude,
             what: this.state.dude,
             cool: 15
         };
 
          console.log([
              ...this.state.characters,
              newDude
          ]);
 
         // Naplnenie pola bez push()
         // Vytvorm nove pole v ktorom bude vsetko co obsahovalo stare pole plus nova polozka
           this.setState(
                 {
                     characters: [...this.state.characters,newDude]
                 }
           );
     }


    /**
     * My template
     */
    render() {



        // Toto nieje HTMLAllCollection, ale JSX code
        return (
            <div>
                <ul>
                    {this.listOfDudes()}
                </ul>

                {/* !!! Pozor, taketo volanie metody nefunguje onSubmit={this.handleSubmit(event)} */}
                {/* <form className="add-new" onSubmit={this.handleSubmit(event)}> */}
                <form onSubmit={event => { this.handleSubmit(event) }} className="add-new">
                    <input type="text" 
                    value = {this.state.dude}
                    onChange={this.handleChange}></input>
                </form>

                <p className="preview">
                    {this.state.dude}
                </p>
            </div>
        );
    }

}

// Vyrenderuj novo vzniknuty element App a vyrenderuj kam: do elementu s id root
ReactDOM.render(<App/>, document.getElementById("root"));