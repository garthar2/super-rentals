import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let {rentals, query} = this.args;


    if (query) {
      rentals = rentals.filter(rental => rental.title.toLowerCase().includes(query.toLowerCase()) ||
        rental.city.toLowerCase().includes(query.toLowerCase()) ||
        rental.owner.toLowerCase().includes(query.toLowerCase()) ||
        rental.type.toLowerCase().includes(query.toLowerCase()));
    }

    return rentals;
  }
}
