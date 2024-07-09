import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Atomic Heart',
          img: 'atomic-heart.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'games',
          price: '25.70'
        },
        {
          id: 2,
          title: 'Forza Horizon 4',
          img: 'forza4.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'games',
          price: '11.49'
        },
        {
          id: 3,
          title: 'Battlefield™ 2042',
          img: 'battlefield.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'games',
          price: '51.23'
        },
        {
          id: 4,
          title: 'Grand Theft Auto V',
          img: 'gtav.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'games',
          price: '16.99'
        },
        {
          id: 5,
          title: 'Counter-Strike 2',
          img: 'cs2.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'games',
          price: '15.88'
        },
        {
          id: 6,
          title: 'LEGO Marvel Super Heroes 2',
          img: 'lego2.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'games',
          price: '27.81'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
        <Items items={this.state.items} onAdd = {this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
