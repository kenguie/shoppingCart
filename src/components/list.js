import React, { Component } from 'React';

class List extends Component {
	render() {
		let itemList = [
			{key:1, name:"apples", amt:3},
			{key:2, name:"pears", amt:4},
			{key:3, name:"pecans", amt:1},
		];
		itemList.push({key:4, name:"bananas", amt:2});
		console.log(itemList);

		itemList.map((item) => {
			console.log(item);
			return item;
		})

		return(
			<div id="ToDo">
				<ul>
					{
						itemList.map(item => 
							<li key={item.key}>
								<span className='item'>{item.name.toUpperCase()}</span>
								<span className='amount'>{item.amt}</span>
								<button className='done'>Done</button>
								<button className='delete'>Delete</button>
							</li>
						)
					}
				</ul>

				<h2>Enter something you need to purchase</h2>
				<h2>Enter the amount you need</h2>
				<button>Submit</button>
			</div>
		)
	}
}

export default List;