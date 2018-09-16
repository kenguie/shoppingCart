import React, { Component } from 'React';

class List extends Component {
	constructor(props) {
		super(props);
		this.formSubmit = this.formSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			itemList: [],
			strike: 'notDone',
		}
	}

	formSubmit(e) {
		const details = [];
		e.target.childNodes.forEach(function(el) {
			if (el.tagName === 'INPUT')
				details[el.name] = el.value
			el.value = null
		})
		const newItems = this.state.itemList.slice()
		newItems.push(details)
		this.setState({
			itemList: newItems
		})
		e.preventDefault()
	}

	handleClick(e) {
		if (this.state.strike === 'notDone'){
			this.setState({
				strike: 'done'
			});
		} else {
			this.setState({
				strike: 'notDone'
			});
		}
	}

	handleDelete(index) {
		console.log(index);
		const newItems = this.state.itemList.splice(index, 1);
    this.setState({
			itemList: newItems
		});
	}

	render() {
		let itemList = [];
		console.log(this.state.itemList);

		return(
			<div id="ToDo">
				<ul>
					{
						this.state.itemList.map((item, index) => 
							<li key={index+1} className={this.state.strike}>
								<span className='item'>{item.name.toUpperCase()}</span>
								<span className='amount'>{item.amt}</span>
								<button className='doneButton' onClick={this.handleClick}>Done</button>
								<button className='deleteButton' onClick={this.handleDelete.bind(this, index+1)}>Delete</button>
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