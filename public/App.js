const contentNode = document.getElementById('contents');
const products = [];

const ProductRow = props => React.createElement(
	"tr",
	null,
	React.createElement(
		"td",
		{ className: "hidden" },
		props.product.id
	),
	React.createElement(
		"td",
		null,
		props.product.productName
	),
	React.createElement(
		"td",
		null,
		props.product.price
	),
	React.createElement(
		"td",
		null,
		props.product.category
	),
	React.createElement(
		"td",
		null,
		React.createElement(
			"a",
			{ href: props.product.imageUrl, target: "_blank" },
			React.createElement(
				"u",
				null,
				"View"
			)
		)
	)
);
function ProductTable(props) {
	const productRows = props.products.map(product => React.createElement(ProductRow, { key: product.id, product: product }));
	return React.createElement(
		"table",
		{ className: "bordered-table colmn-width" },
		React.createElement(
			"thead",
			null,
			React.createElement(
				"tr",
				null,
				React.createElement(
					"th",
					{ className: "hidden" },
					"Id"
				),
				React.createElement(
					"th",
					null,
					"Product Name"
				),
				React.createElement(
					"th",
					null,
					"Price"
				),
				React.createElement(
					"th",
					null,
					"Category"
				),
				React.createElement(
					"th",
					null,
					"Image"
				)
			)
		),
		React.createElement(
			"tbody",
			null,
			productRows
		)
	);
}

class ProductList extends React.Component {
	constructor() {
		super();
		this.state = { products: [] };
		this.createProduct = this.createProduct.bind(this);
	}
	componentDidMount() {
		this.loadData();
	}
	loadData() {
		setTimeout(() => {
			this.setState({ products: products });
		}, 500);
	}
	createProduct(newProduct) {
		const newProducts = this.state.products.slice();
		newProduct.id = this.state.products.length + 1;
		newProducts.push(newProduct);
		this.setState({ products: newProducts });
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"My Company Inventory"
			),
			React.createElement(
				"div",
				null,
				"Showing all available products."
			),
			React.createElement("hr", null),
			React.createElement(ProductTable, { products: this.state.products }),
			React.createElement(
				"div",
				{ className: "top-buffer" },
				"Add a new product to inventory"
			),
			React.createElement("hr", null),
			React.createElement(ProductAdd, { createProduct: this.createProduct })
		);
	}
}

class ProductAdd extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		var form = document.forms.productAdd;
		this.props.createProduct({
			category: form.category.value,
			price: "$" + form.price.value,
			productName: form.productName.value,
			imageUrl: form.imageUrl.value
		});
		form.category.value = "";form.price.value = "";form.productName.value = "";form.imageUrl.value = "";
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"form",
				{ name: "productAdd", onSubmit: this.handleSubmit },
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"div",
						{ className: "col-sm-6" },
						React.createElement(
							"label",
							null,
							"Category"
						)
					),
					React.createElement(
						"div",
						{ className: "col-sm-6" },
						React.createElement(
							"label",
							null,
							"Price"
						)
					),
					React.createElement(
						"div",
						{ className: "col-sm-6" },
						React.createElement(
							"select",
							{ id: "category", className: "form-control" },
							React.createElement(
								"option",
								{ value: "Shirts" },
								"Shirts"
							),
							React.createElement(
								"option",
								{ value: "Jeans" },
								"Jeans"
							),
							React.createElement(
								"option",
								{ value: "Jackets" },
								"Jackets"
							),
							React.createElement(
								"option",
								{ value: "Sweaters" },
								"Sweaters"
							),
							React.createElement(
								"option",
								{ value: "Accessories" },
								"Accessories"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-sm-6" },
						React.createElement("input", { className: "form-control", type: "text", name: "price", placeholder: "$" })
					)
				),
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"div",
						{ className: "col-sm-6  top-buffer" },
						React.createElement(
							"label",
							null,
							"Product Name"
						)
					),
					React.createElement(
						"div",
						{ className: "col-sm-6  top-buffer" },
						React.createElement(
							"label",
							null,
							"Image URL"
						)
					),
					React.createElement(
						"div",
						{ className: "col-sm-6" },
						React.createElement("input", { className: "form-control", type: "text", name: "productName" })
					),
					React.createElement(
						"div",
						{ className: "col-sm-6" },
						React.createElement("input", { className: "form-control", type: "text", name: "imageUrl" })
					)
				),
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"div",
						{ className: "col-sm-10" },
						React.createElement(
							"button",
							{ className: "btn btn-default  top-buffer" },
							"Add Product"
						)
					)
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(ProductList, null), contentNode);