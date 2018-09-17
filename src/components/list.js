import React, { Component } from 'React';

class List extends Component {
	constructor(props) {
		super(props);
		this.formSubmit = this.formSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			counterState: 1,
			itemList: [],
			strike: 'notDone',
		}
	}

	formSubmit(e) {
		const details = [];
		let counter;
		e.target.childNodes.forEach(function(el) {
			if (el.tagName === 'INPUT') {
				details[el.name] = el.value;
				el.value = null;
			}
		})
		const newItems = this.state.itemList.slice()
		details.key = this.state.counterState;
		details.strike = this.state.strike;
		counter = this.state.counterState+1;
		newItems.push(details);
		this.setState({
			itemList: newItems,
			counterState: counter
		})
		e.preventDefault()
	}

	handleClick(currentItem) {
		const filteredItems = this.state.itemList.filter(function (item) {

			if (currentItem.strike === 'notDone' && currentItem.key === item.key) {
				item.strike = 'done';
			} else if (currentItem.strike === 'done' && currentItem.key === item.key) {
				item.strike = 'notDone';
			} 

			return item;
		});

		this.setState({
			itemList: filteredItems
		});
	}

	handleDelete(key) {
		const filteredItems = this.state.itemList.filter(function (item) {
			return (item.key !== key);
		});
	 
		this.setState({
			itemList: filteredItems
		});
	}

	render() {
		let itemList = [];

		return(
			<div id="ToDo">
				<ul>
					{
						this.state.itemList.map((item) => 
							<li key={item.key} className={item.strike}>
								<span className='item'>{item.name.toUpperCase()}</span>
								<span className='amount'>{item.amt}</span>
								<button className='doneButton' onClick={this.handleClick.bind(this, item)}>Done</button>
								<button className='deleteButton' onClick={this.handleDelete.bind(this, item.key)}>Delete</button>
							</li>
						)
					}
				</ul>

				<form onSubmit={this.formSubmit}>
					<input type="text" name='name' placeholder='Enter something you need to purchase' />
					<input type="text" name='amt' placeholder='Enter the amount you need' />
					<button type='submit' onSubmit={this.handleSubmit}> Submit </button>
				</form>
			</div>
		)
	}
}

export default List;