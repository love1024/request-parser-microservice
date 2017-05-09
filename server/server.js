import http from 'http';

const port = 2500;

let server = http.createServer(function(req,res) {
    let ip =  req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let language = req.headers["accept-language"].split(";")[0];
    let software = req.headers['user-agent'].match(/\(([^)]+)\)/)[1];

    res.end(JSON.stringify({"ipaddress":ip,"language":language,"software":software}));
});

server.listen(process.env.PORT || port);
