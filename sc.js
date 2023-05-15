var SSH = require('simple-ssh')

var ssh = new SSH({
	user: 'vaibhav',
	host: '10.180.6.54',
	pass: 'changeme'
});

var ssh2 = new SSH({
	user: 'adminblr',
	host: '10.180.16.155',
	pass: 'AdminBLR@345'
})

ssh.exec('whoami' ,{
		out: function(stdout)	{
			console.log(stdout);
		}
		}).start();

ssh2.exec('whoami',{
	out: function(stdout) {
		console.log(stdout);
	}
}).start();