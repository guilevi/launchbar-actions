// LaunchBar Action Script

function run(argument) {
    if (argument == undefined) {
        LaunchBar.alert('Pass a ticker as the argument (without -PERP)');
    } else {
		let coin=argument;
		let res=HTTP.getJSON("https://ftx.com/api/futures/"+coin+"-PERP");
		return [
			{
				title: '$'+res.data.result.mark.toString(),
				subtitle: "Mark Price",
			},
			{
				title: '$'+res.data.result.index.toString(),
				subtitle: "Price of "+res.data.result.underlying,
			},
		];
    }
}
