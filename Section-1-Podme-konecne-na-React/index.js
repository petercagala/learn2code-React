// Tu chcem vytvorit novy komponent, ktory bude normalna javascriptova trieda a nazvem si tento komponent App
// V Reacte mozes komponenty vyrabat cez classy, alebo funkcie

// Tymto mam v apke novy html tag App
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newWho: 'Milan Veroni',
            newWhat: 'huslista',
            characters: [
                {
                    id: 1,
                    who: 'Peter Cagala',
                    what: 'Java Developer',
                    cool: 8
                },
                {
                    id: 2,
                    who: 'Katarina Cagalova',
                    what: 'Uctovnicka',
                    cool: 48
                }
            ]
        };
    }

    // React sa vyziva v ES6: pouzi arrow function, budes mat pristup k this: arrow function si nevytvaraju v
    // vlastny context pre this, teda v tomto pripade this sa bude odkazovat na cely komponent App
    handleNewWho = event => {
        //target:  Na ktorom elemente presne zmena nastala
        console.log(event.target.value);
        this.setState({
            newWho: event.target.value
        });

    }

    handleNewWhat = event => {
        console.log(event.target.value);
        this.setState({
            newWhat: event.target.value
        });

    }

    /**
     * Akoze listOfDudes component
     */
    listOfDudes = () => {
        const dudeWhoList = this.state.characters.map(dude => (
            <li key={dude.id}  className="dude">
                <a className="ctrl">x</a>

                <article className={dude.cool < 10 ? 'faded': dude.cool > 50 ? 'gold': ''}>
                     {dude.who}
                    <span>{dude.what}</span>
                </article> 

                <input type="number" className="ctrl" value={dude.cool}></input>


            </li>
        ));

        return dudeWhoList;
    }

     handleKeyPress = event => {
        //  event.preventDefault();

         console.log(event.key);

        if(event.key === 'Enter') {
                    //  alert(this.state.dude);
 
          // 1. SPOSOB (skratka sst)
         // Naplnenie pola bez push()
         // ...spread operator krasne rozotrie vsetky svoje polozky
         // Vytvorm nove pole v ktorom bude vsetko co obsahovalo stare pole plus nova polozka
        //    this.setState(
        //          {
        //              characters: [...this.state.characters,newDude]
        //          }
        //    );


           // 2. SPOSOB (skratka ssf) -> BEZPECNEJSI, lebo mas aktualy stav state
           // Pouzijem, ked nevytvara kompletne novu hodnotu characters, ale chcem pozit staru hodnotu
           // Toto je lepsi sposob cez funkciu, pretoze state v sebe obsahuje aktualnu momentalnu hodnotu stavu
           // teda objekt ...this.state.characters moze fungovat
           // funkcia ...state.characters bude fungovat
           this.setState((state) => { 

            // Vytiahnu maxId z listov vsetkych dudov
            let maxId = Math.max(...state.characters.map(dudeItem => dudeItem.id));

            let newDude =  {
                id: maxId + 1,
                who: this.state.newWho,
                what: this.state.newWhat,
                cool: 51
            };

            console.log([
                ...this.state.characters,
                newDude
            ]);


               
            return {
                characters: [...state.characters, newDude],
                newWho: '',
                newWhat: ''
                }
            })
        }
           
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
                <form onKeyPress ={event => { this.handleKeyPress(event) }} className="add-new">
                    newWho: <input type="text" 
                    value = {this.state.newWho}
                    onChange={this.handleNewWho}></input>

                    newWhat: <input type="text" 
                    value = {this.state.newWhat}
                    onChange={this.handleNewWhat}></input>
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